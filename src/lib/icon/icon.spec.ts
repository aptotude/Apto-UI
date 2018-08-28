import {inject, async, fakeAsync, tick, TestBed} from '@angular/core/testing';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Component} from '@angular/core';
import {AptoIconComponentModule} from './index';
import {AptoIconRegistry, getAptoIconNoHttpProviderError} from './icon-registry';
import {FAKE_SVGS} from './fake-svgs';
import {IconColors} from './icon.component';

@Component({template: `<apto-icon [circleColor]="iconColor" [icon]="iconName"></apto-icon>`})
class IconWithColorComponent {
    iconName = '';
    iconColor = IconColors.white;
}

@Component({template: `<apto-icon [size]="iconSize" [icon]="iconName"></apto-icon>`})
class IconWithSizeComponent {
    iconName = '';
    iconSize = 2;
}

@Component({template: `<apto-icon [icon]="iconName"></apto-icon>`})
class IconFromSvgNameComponent {
    iconName: string | undefined = '';
}

@Component({template: `<apto-icon inline [icon]="iconName"></apto-icon>`})
class IconWithInlineComponent {
    iconName: string | undefined = '';
}

@Component({template: `<apto-icon circle [icon]="iconName"></apto-icon>`})
class IconWithCircleComponent {
    iconName: string | undefined = '';
}

@Component({template: '<apto-icon aria-hidden="false">face</apto-icon>'})
class IconWithAriaHiddenFalseComponent {}

@Component({template: `<apto-icon [icon]="iconName" *ngIf="showIcon"></apto-icon>`})
class IconWithBindingAndNgIfComponent {
    iconName = 'fluffy';
    showIcon = true;
}

@Component({template: `<apto-icon [icon]="iconName"><div>Hello</div></apto-icon>`})
class SvgIconWithUserContentComponent {
    iconName: string | undefined = '';
}

/** Returns the CSS classes assigned to an element as a sorted array. */
function sortedClassNames(element: Element): string[] {
    return element.className.split(' ').sort();
}

/**
 * Verifies that an element contains a single `<svg>` child element, and returns that child.
 */
function verifyAndGetSingleSvgChild(element: SVGElement): SVGElement {
    expect(element.id).toBeFalsy();
    expect(element.childNodes.length).toBe(1);
    const svgChild = element.childNodes[0] as SVGElement;
    expect(svgChild.tagName.toLowerCase()).toBe('svg');
    return svgChild;
}

/**
 * Verifies that an element contains a single `<path>` child element whose "id" attribute has
 * the specified value.
 */
function verifyPathChildElement(element: Element, attributeValue: string): void {
    expect(element.childNodes.length).toBe(1);
    const pathElement = element.childNodes[0] as SVGPathElement;
    expect(pathElement.tagName.toLowerCase()).toBe('path');

    // The testing data SVGs have the name attribute set for verification.
    expect(pathElement.getAttribute('name')).toBe(attributeValue);
}


describe('Apto Icon', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, AptoIconComponentModule],
            declarations: [
                IconWithColorComponent,
                IconFromSvgNameComponent,
                IconWithAriaHiddenFalseComponent,
                IconWithBindingAndNgIfComponent,
                SvgIconWithUserContentComponent,
                IconWithSizeComponent,
                IconWithInlineComponent,
                IconWithCircleComponent
            ],
            providers: [
                AptoIconRegistry
            ]
        });

        TestBed.compileComponents();
    }));

    let iconRegistry: AptoIconRegistry;
    let http: HttpTestingController;
    let sanitizer: DomSanitizer;

    beforeEach(inject([AptoIconRegistry, HttpTestingController, DomSanitizer],
        (mir: AptoIconRegistry, h: HttpTestingController, ds: DomSanitizer) => {
            iconRegistry = mir;
            http = h;
            sanitizer = ds;
        }
    ));

    it('should apply class based on color attribute', () => {
        const fixture = TestBed.createComponent(IconWithColorComponent);
        const testComponent = fixture.componentInstance;
        const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        testComponent.iconColor = IconColors.blue;
        fixture.detectChanges();
        expect(sortedClassNames(matIconElement)).toEqual(['apto-icon', 'apto-icon--color-blue']);
    });

    it('should apply class based on color attribute', () => {
        const fixture = TestBed.createComponent(IconWithSizeComponent);
        const testComponent = fixture.componentInstance;
        const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        testComponent.iconSize = 5;
        fixture.detectChanges();
        expect(sortedClassNames(matIconElement)).toEqual(['apto-icon', 'apto-icon--size-5']);
    });

    it('should apply class based on inline attribute', () => {
        const fixture = TestBed.createComponent(IconWithInlineComponent);
        const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        fixture.detectChanges();
        expect(sortedClassNames(matIconElement)).toEqual(['apto-icon', 'apto-icon--inline']);
    });

    it('should apply class based on circle attribute', () => {
        const fixture = TestBed.createComponent(IconWithCircleComponent);
        const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        fixture.detectChanges();
        expect(sortedClassNames(matIconElement)).toEqual(['apto-icon', 'apto-icon--circle']);
    });

    it('should mark apto-icon as aria-hidden by default', () => {
        const fixture = TestBed.createComponent(IconFromSvgNameComponent);
        const iconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        expect(iconElement.getAttribute('aria-hidden'))
        .toBe('true', 'Expected the apto-icon element has aria-hidden="true" by default');
    });

    it('should not override a user-provided aria-hidden attribute', () => {
        const fixture = TestBed.createComponent(IconWithAriaHiddenFalseComponent);
        const iconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
        expect(iconElement.getAttribute('aria-hidden'))
        .toBe('false', 'Expected the apto-icon element has the user-provided aria-hidden value');
    });

    describe('Icons from URLs', () => {
        it('should register icon URLs by name', fakeAsync(() => {
            iconRegistry.addSvgIcon('fluffy', trustUrl('cat.svg'));
            iconRegistry.addSvgIcon('fido', trustUrl('dog.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            let svgElement: SVGElement;
            const testComponent = fixture.componentInstance;
            const iconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');

            testComponent.iconName = 'fido';
            fixture.detectChanges();
            http.expectOne('dog.svg').flush(FAKE_SVGS.dog);
            svgElement = verifyAndGetSingleSvgChild(iconElement);
            verifyPathChildElement(svgElement, 'woof');

            // Change the icon, and the SVG element should be replaced.
            testComponent.iconName = 'fluffy';
            fixture.detectChanges();
            http.expectOne('cat.svg').flush(FAKE_SVGS.cat);
            svgElement = verifyAndGetSingleSvgChild(iconElement);
            verifyPathChildElement(svgElement, 'meow');

            // Using an icon from a previously loaded URL should not cause another HTTP request.
            testComponent.iconName = 'fido';
            fixture.detectChanges();
            http.expectNone('dog.svg');
            svgElement = verifyAndGetSingleSvgChild(iconElement);
            verifyPathChildElement(svgElement, 'woof');

            // Assert that a registered icon can be looked-up by url.
            iconRegistry.getSvgIconFromUrl(trustUrl('cat.svg')).subscribe(element => {
                verifyPathChildElement(element, 'meow');
            });

            tick();
        }));

        it('should throw an error when using an untrusted icon url', () => {
            iconRegistry.addSvgIcon('fluffy', 'farm-set-1.svg');

            expect(() => {
                const fixture = TestBed.createComponent(IconFromSvgNameComponent);
                fixture.componentInstance.iconName = 'fluffy';
                fixture.detectChanges();
            }).toThrowError(/unsafe value used in a resource URL context/);
        });

        it('should throw an error when using an untrusted icon set url', () => {
            iconRegistry.addSvgIconSetInNamespace('farm', 'farm-set-1.svg');

            expect(() => {
                const fixture = TestBed.createComponent(IconFromSvgNameComponent);
                fixture.componentInstance.iconName = 'farm:pig';
                fixture.detectChanges();
            }).toThrowError(/unsafe value used in a resource URL context/);
        });

        it('should extract icon from SVG icon set', () => {
            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-1.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            const testComponent = fixture.componentInstance;
            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
            let svgElement: any;
            let svgChild: any;

            testComponent.iconName = 'farm:pig';
            fixture.detectChanges();
            http.expectOne('farm-set-1.svg').flush(FAKE_SVGS.farmSet1);

            expect(matIconElement.childNodes.length).toBe(1);
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            expect(svgElement.childNodes.length).toBe(1);
            svgChild = svgElement.childNodes[0];
            // The first <svg> child should be the <g id="pig"> element.
            expect(svgChild.tagName.toLowerCase()).toBe('g');
            expect(svgChild.getAttribute('name')).toBe('pig');
            verifyPathChildElement(svgChild, 'oink');

            // Change the icon, and the SVG element should be replaced.
            testComponent.iconName = 'farm:cow';
            fixture.detectChanges();
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            svgChild = svgElement.childNodes[0];
            // The first <svg> child should be the <g id="cow"> element.
            expect(svgChild.tagName.toLowerCase()).toBe('g');
            expect(svgChild.getAttribute('name')).toBe('cow');
            verifyPathChildElement(svgChild, 'moo');
        });

        it('should never parse the same icon set multiple times', () => {
            // Normally we avoid spying on private methods like this, but the parsing is a private
            // implementation detail that should not be exposed to the public API. This test, though,
            // is important enough to warrant the brittle-ness that results.
            spyOn(iconRegistry, '_svgElementFromString' as any).and.callThrough();

            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-1.svg'));

            // Requests for icons must be subscribed to in order for requests to be made.
            iconRegistry.getNamedSvgIcon('pig', 'farm').subscribe(() => {});
            iconRegistry.getNamedSvgIcon('cow', 'farm').subscribe(() => {});

            http.expectOne('farm-set-1.svg').flush(FAKE_SVGS.farmSet1);

            // _svgElementFromString is called once for each icon to create an empty SVG element
            // and once to parse the full icon set.
            expect((iconRegistry as any)._svgElementFromString).toHaveBeenCalledTimes(3);
        });

        it('should allow multiple icon sets in a namespace', () => {
            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-1.svg'));
            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-2.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            const testComponent = fixture.componentInstance;
            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
            let svgElement: any;
            let svgChild: any;

            testComponent.iconName = 'farm:pig';
            fixture.detectChanges();
            http.expectOne('farm-set-1.svg').flush(FAKE_SVGS.farmSet1);
            http.expectOne('farm-set-2.svg').flush(FAKE_SVGS.farmSet2);

            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            expect(svgElement.childNodes.length).toBe(1);
            svgChild = svgElement.childNodes[0];
            // The <svg> child should be the <g id="pig"> element.
            expect(svgChild.tagName.toLowerCase()).toBe('g');
            expect(svgChild.getAttribute('name')).toBe('pig');
            expect(svgChild.getAttribute('id')).toBeFalsy();
            expect(svgChild.childNodes.length).toBe(1);
            verifyPathChildElement(svgChild, 'oink');

            // Change the icon name to one that appears in both icon sets. The icon from the set that
            // was registered last should be used (with id attribute of 'moo moo' instead of 'moo'),
            // and no additional HTTP request should be made.
            testComponent.iconName = 'farm:cow';
            fixture.detectChanges();
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            svgChild = svgElement.childNodes[0];
            // The first <svg> child should be the <g id="cow"> element.
            expect(svgChild.tagName.toLowerCase()).toBe('g');
            expect(svgChild.getAttribute('name')).toBe('cow');
            expect(svgChild.childNodes.length).toBe(1);
            verifyPathChildElement(svgChild, 'moo moo');
        });

        it('should clear the id attribute from the svg node', () => {
            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-1.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);

            fixture.componentInstance.iconName = 'farm:pig';
            fixture.detectChanges();
            http.expectOne('farm-set-1.svg').flush(FAKE_SVGS.farmSet1);

            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
            const svgElement = verifyAndGetSingleSvgChild(matIconElement);

            expect(svgElement.hasAttribute('id')).toBe(false);
        });

        it('should unwrap <symbol> nodes', () => {
            iconRegistry.addSvgIconSetInNamespace('farm', trustUrl('farm-set-3.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            const testComponent = fixture.componentInstance;
            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');

            testComponent.iconName = 'farm:duck';
            fixture.detectChanges();
            http.expectOne('farm-set-3.svg').flush(FAKE_SVGS.farmSet3);

            const svgElement = verifyAndGetSingleSvgChild(matIconElement);
            const firstChild = svgElement.childNodes[0];

            expect(svgElement.querySelector('symbol')).toBeFalsy();
            expect(svgElement.childNodes.length).toBe(1);
            expect(firstChild.nodeName.toLowerCase()).toBe('path');
            expect((firstChild as HTMLElement).getAttribute('name')).toBe('quack');
        });

        it('should not wrap <svg> elements in icon sets in another svg tag', () => {
            iconRegistry.addSvgIconSet(trustUrl('arrow-set.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            const testComponent = fixture.componentInstance;
            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
            let svgElement: any;

            testComponent.iconName = 'left-arrow';
            fixture.detectChanges();
            http.expectOne('arrow-set.svg').flush(FAKE_SVGS.arrows);

            // arrow-set.svg stores its icons as nested <svg> elements, so they should be used
            // directly and not wrapped in an outer <svg> tag like the <g> elements in other sets.
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            verifyPathChildElement(svgElement, 'left');
        });

        it('should return unmodified copies of icons from icon sets', () => {
            iconRegistry.addSvgIconSet(trustUrl('arrow-set.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);
            const testComponent = fixture.componentInstance;
            const matIconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');
            let svgElement: any;

            testComponent.iconName = 'left-arrow';
            fixture.detectChanges();
            http.expectOne('arrow-set.svg').flush(FAKE_SVGS.arrows);
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            verifyPathChildElement(svgElement, 'left');
            // Modify the SVG element by setting a viewBox attribute.
            svgElement.setAttribute('viewBox', '0 0 100 100');

            // Switch to a different icon.
            testComponent.iconName = 'right-arrow';
            fixture.detectChanges();
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            verifyPathChildElement(svgElement, 'right');

            // Switch back to the first icon. The viewBox attribute should not be present.
            testComponent.iconName = 'left-arrow';
            fixture.detectChanges();
            svgElement = verifyAndGetSingleSvgChild(matIconElement);
            verifyPathChildElement(svgElement, 'left');
            expect(svgElement.getAttribute('viewBox')).toBeFalsy();
        });

        it('should not throw when toggling an icon that has a binding in IE11', () => {
            iconRegistry.addSvgIcon('fluffy', trustUrl('cat.svg'));

            const fixture = TestBed.createComponent(IconWithBindingAndNgIfComponent);

            fixture.detectChanges();
            http.expectOne('cat.svg').flush(FAKE_SVGS.cat);

            expect(() => {
                fixture.componentInstance.showIcon = false;
                fixture.detectChanges();

                fixture.componentInstance.showIcon = true;
                fixture.detectChanges();
            }).not.toThrow();
        });

        it('should remove the SVG element from the DOM when the binding is cleared', () => {
            iconRegistry.addSvgIconSet(trustUrl('arrow-set.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);

            const testComponent = fixture.componentInstance;
            const icon = fixture.debugElement.nativeElement.querySelector('apto-icon');

            testComponent.iconName = 'left-arrow';
            fixture.detectChanges();
            http.expectOne('arrow-set.svg').flush(FAKE_SVGS.arrows);

            expect(icon.querySelector('svg')).toBeTruthy();

            testComponent.iconName = undefined;
            fixture.detectChanges();

            expect(icon.querySelector('svg')).toBeFalsy();
        });

        it('should keep non-SVG user content inside the icon element', fakeAsync(() => {
            iconRegistry.addSvgIcon('fido', trustUrl('dog.svg'));

            const fixture = TestBed.createComponent(SvgIconWithUserContentComponent);
            const testComponent = fixture.componentInstance;
            const iconElement = fixture.debugElement.nativeElement.querySelector('apto-icon');

            testComponent.iconName = 'fido';
            fixture.detectChanges();
            http.expectOne('dog.svg').flush(FAKE_SVGS.dog);

            const userDiv = iconElement.querySelector('div');

            expect(userDiv).toBeTruthy();
            expect(iconElement.textContent.trim()).toContain('Hello');

            tick();
        }));
    });

    /** Marks an SVG icon url as explicitly trusted. */
    function trustUrl(iconUrl: string): SafeResourceUrl {
        return sanitizer.bypassSecurityTrustResourceUrl(iconUrl);
    }
});

describe('AptoIcon without HttpClientModule', () => {
    let iconRegistry: AptoIconRegistry;
    let sanitizer: DomSanitizer;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AptoIconComponentModule],
            declarations: [IconFromSvgNameComponent],
            providers: [AptoIconRegistry],
        });

        TestBed.compileComponents();
    }));

    beforeEach(inject([AptoIconRegistry, DomSanitizer], (mir: AptoIconRegistry, ds: DomSanitizer) => {
        iconRegistry = mir;
        sanitizer = ds;
    }));

    it('should throw an error when trying to load a remote icon', async() => {
        const errorMessage: Error = getAptoIconNoHttpProviderError();
        expect(() => {
            iconRegistry.addSvgIcon('fido', sanitizer.bypassSecurityTrustResourceUrl('dog.svg'));

            const fixture = TestBed.createComponent(IconFromSvgNameComponent);

            fixture.componentInstance.iconName = 'fido';
            fixture.detectChanges();
        }).toThrowError(errorMessage.message);
    });
});
