import { AptoButton, ButtonKinds, ButtonTypes } from './button.component';
import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';

describe('apto-button', () => {
    let fixture: ComponentFixture<AptoButton>;
    let component: AptoButton;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AptoButton ]
        }).compileComponents();

        fixture = TestBed.createComponent(AptoButton);
        component = fixture.componentInstance;

        fixture.detectChanges();
    }));

    afterEach(() => {
        fixture.destroy();
    });

    describe('classes', () => {
        it('has the correct base class name', () => {
            const button = fixture.nativeElement.querySelector('button');

            expect(button.className.includes('apto-button')).toBe(true);
        })

        describe('when kind is', () => {
            describe('not passed', () => {
                it('has the correct default class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--primary')).toBe(true);
                });
            });

            describe('primary', () => {
                beforeEach(() => {
                    component.kind = ButtonKinds.Primary;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--primary')).toBe(true);
                });
            });

            describe('secondary', () => {
                beforeEach(() => {
                    component.kind = ButtonKinds.Secondary;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--secondary')).toBe(true);
                });
            });
        });

        describe('when type is', () => {
            describe('not passed', () => {
                it('has the correct default class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--button')).toBe(true);
                });
            });

            describe('button', () => {
                beforeEach(() => {
                    component.type = ButtonTypes.Button;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--button')).toBe(true);
                });
            });

            describe('link', () => {
                beforeEach(() => {
                    component.type = ButtonTypes.Link;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--link')).toBe(true);
                });
            });
        });
    });

    describe('text', () => {
        const mockText = '💩';

        beforeEach(() => {
            component.text = mockText;
            fixture.detectChanges();
        });

        it('has the text it is passed', () => {
            const button = fixture.nativeElement.querySelector('button');

            expect(button.innerText).toContain(mockText);
        });
    });

    describe('active', () => {
        describe('when active not passed', () => {
            it('disabled is false', () => {
                const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

                expect(button.disabled).toBe(false);
            });
        });

        describe('when active', () => {
            beforeEach(() => {
                component.active = true;
                fixture.detectChanges();
            });

            it('disabled is false', () => {
                const button = fixture.nativeElement.querySelector('button');

                expect(button.disabled).toBe(false);
            });
        });

        describe('when not active', () => {
            beforeEach(() => {
                component.active = false;
                fixture.detectChanges();
            });

            it('disabled is true', () => {
                const button = fixture.nativeElement.querySelector('button');

                expect(button.disabled).toBe(true);
            });
        });
    });

    describe('title', () => {
        describe('when there is a title', () => {
            const mockText = '💩';

            beforeEach(() => {
                component.title = mockText;
                fixture.detectChanges();
            });

            it('has an aria-label that is equivalent to the title', () => {
                const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

                expect(button.getAttribute('aria-label')).toContain(mockText);
            });
        });

        describe('when there is not a title', () => {
            it('has an aria-label that is equivalent to the title', () => {
                const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

                expect(button.getAttribute('aria-label')).toBeNull();
            });
        });
    });

    describe('Click Event', () => {
        it('Should emit click if active', () => {
            const spy = spyOn(component.onClick, 'emit');
            const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
            button.click();
            expect(spy).toHaveBeenCalled();
        });

        it('Should not emit click if inactive', () => {
            const spy = spyOn(component.onClick, 'emit');
            component.active = false;
            const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
            button.click();
            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('Mouse Events', () => {
        it('Should emit mouseover', () => {
            const spy = spyOn(component.onMouseOver, 'emit');
            const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
            const event = new Event('mouseenter');
            button.dispatchEvent(event);
            expect(spy).toHaveBeenCalled();
        });

        it('Should emit mouseout', () => {
            const spy = spyOn(component.onMouseOut, 'emit');
            component.active = false;
            const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
            const event = new Event('mouseout');
            button.dispatchEvent(event);
            expect(spy).not.toHaveBeenCalled();
        });
    });
});
