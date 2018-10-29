import { ButtonKinds, ButtonTypes, AptoButtonComponent } from './button.component';
import { async as ngAsync, TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { AptoButtonComponentModule } from './button.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `
      <apto-button
        [disabled]="isDisabled"
        [kind]="buttonKind"
        [title]="buttonTitle"
        (click)="increment()"
        [type]="buttonType"
        [automation]="automationId">GO</apto-button>
    `
})
class TestComponent {
    clickCount = 0;
    isDisabled = false;
    buttonKind: ButtonKinds;
    buttonTitle = '';
    buttonType: ButtonTypes;
    automationId: string = null;

    increment() {
        this.clickCount += 1;
    }
}
@Component({
    template: `
      <apto-button (hold)="increment()" holdButton>GO</apto-button>
    `
})
class HoldButtonTestComponent {
    holdCount = 0;
    increment() {
        this.holdCount += 1;
    }
}


describe('apto-button', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: any;
    let buttonDebugElement: DebugElement;
    let buttonInstance: AptoButtonComponent;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoButtonComponentModule ],
            declarations: [
                TestComponent,
                HoldButtonTestComponent
            ]
        });
        TestBed.compileComponents();
    }));

    describe('hold directive', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(HoldButtonTestComponent);
            testComponent = fixture.debugElement.componentInstance;
            buttonDebugElement = fixture.debugElement.query(By.directive(AptoButtonComponent));
            buttonInstance = buttonDebugElement.componentInstance;
            fixture.detectChanges();
        });

        it('should add hold elements', () => {
            const cont = fixture.nativeElement.querySelector('.AptoHold');
            const bar = fixture.nativeElement.querySelector('.AptoHold-progressBar');
            expect(cont).not.toBe(null);
            expect(bar).not.toBe(null);
        });

        it('should activate progress bar', () => {
            buttonDebugElement.triggerEventHandler('mousedown', null);
            fixture.detectChanges();

            const cont = buttonDebugElement.nativeElement.querySelector('.AptoHold');
            expect(cont.className).toContain('AptoHold--active');
        });

        it('should toggle progress bar on donw/up', () => {
            buttonDebugElement.triggerEventHandler('mousedown', null);

            let cont = buttonDebugElement.nativeElement.querySelector('.AptoHold');
            expect(cont.className).toContain('AptoHold--active');

            buttonDebugElement.triggerEventHandler('mouseup', null);

            cont = buttonDebugElement.nativeElement.querySelector('.AptoHold');
            expect(cont.className).not.toContain('AptoHold--active');
        });

        it('should toggle progress bar on down/leave', () => {
            buttonDebugElement.triggerEventHandler('mousedown', null);

            let cont = buttonDebugElement.nativeElement.querySelector('.AptoHold');
            expect(cont.className).toContain('AptoHold--active');

            buttonDebugElement.triggerEventHandler('mouseleave', null);

            cont = buttonDebugElement.nativeElement.querySelector('.AptoHold');
            expect(cont.className).not.toContain('AptoHold--active');
        });

        it('should fire hold', fakeAsync(() => {
            buttonDebugElement.triggerEventHandler('mousedown', null);
            tick(2500);
            expect(testComponent.holdCount).toEqual(1);
        }));

        it('should cancel hold', fakeAsync(() => {
            buttonDebugElement.triggerEventHandler('mousedown', null);
            tick(1000);
            buttonDebugElement.triggerEventHandler('mouseup', null);
            tick(1500);
            expect(testComponent.holdCount).toEqual(0);
        }));

        it('should not fire hold if disabled', fakeAsync(() => {
            buttonInstance.disabled = true;
            fixture.detectChanges();
            buttonDebugElement.triggerEventHandler('mousedown', null);
            tick(2500);
            expect(testComponent.holdCount).toEqual(1);
        }));
    });

    describe('basic component', () => {
        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.debugElement.componentInstance;
            fixture.detectChanges();
        });

        describe('classes', () => {
            it('has the correct base class name', () => {
                const button = fixture.nativeElement.querySelector('button');

                expect(button.className.includes('AptoButton')).toBe(true);
            });

            describe('when kind is', () => {
                describe('not passed', () => {
                    it('has the correct default class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--primary')).toBe(true);
                    });
                });

                describe('primary', () => {
                    beforeEach(() => {
                        testComponent.buttonKind = ButtonKinds.Primary;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--primary')).toBe(true);
                    });
                });

                describe('secondary', () => {
                    beforeEach(() => {
                        testComponent.buttonKind = ButtonKinds.Secondary;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--secondary')).toBe(true);
                    });
                });

                describe('secondaryDark', () => {
                    beforeEach(() => {
                        testComponent.buttonKind = ButtonKinds.SecondaryDark;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--secondaryDark')).toBe(true);
                    });
                });

                describe('danger', () => {
                    beforeEach(() => {
                        testComponent.buttonKind = ButtonKinds.Danger;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--danger')).toBe(true);
                    });
                });
            });

            describe('when type is', () => {
                describe('not passed', () => {
                    it('has the correct default class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--button')).toBe(true);
                    });
                });

                describe('button', () => {
                    beforeEach(() => {
                        testComponent.buttonType = ButtonTypes.Button;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');

                        expect(button.className.includes('AptoButton--button')).toBe(true);
                    });
                });

                describe('link', () => {
                    beforeEach(() => {
                        testComponent.buttonType = ButtonTypes.Link;
                        fixture.detectChanges();
                    });

                    it('has the correct class name', () => {
                        const button = fixture.nativeElement.querySelector('button');
                        expect(button.className.includes('AptoButton--link')).toBe(true);
                    });
                });
            });
        });

        describe('text', () => {
            it('has the text it is passed', () => {
                const button = fixture.nativeElement.querySelector('button');
                expect(button.innerText).toContain('GO');
            });
        });

        describe('automation id', () => {
            it('data-automation id', () => {
                testComponent.automationId = 'foo';
                fixture.detectChanges();
                const button = fixture.nativeElement.querySelector('button');
                expect(button.getAttribute('data-automation')).toEqual('foo');
            });
        });

        describe('disabled', () => {
            describe('when disabled not passed', () => {
                it('disabled is false', () => {
                    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

                    expect(button.disabled).toBe(false);
                });
            });

            describe('when not disabled', () => {
                beforeEach(() => {
                    testComponent.isDisabled = false;
                    fixture.detectChanges();
                });

                it('disabled is false', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.disabled).toBe(false);
                    expect(button.getAttribute('aria-disabled')).toBe(null);
                });
            });

            describe('when disabled', () => {
                beforeEach(() => {
                    testComponent.isDisabled = true;
                    fixture.detectChanges();
                });

                it('disabled is true', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.disabled).toBe(true);
                    expect(button.getAttribute('aria-disabled')).toBe('true');
                });
            });
        });

        describe('title', () => {
            describe('when there is a title', () => {
                const mockText = '💩';

                beforeEach(() => {
                    testComponent.buttonTitle = mockText;
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
                const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
                button.click();
                expect(testComponent.clickCount).toBe(1);
            });

            it('Should not emit click if disabled', () => {
                testComponent.isDisabled = true;
                fixture.detectChanges();
                const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
                button.click();
                expect(testComponent.clickCount).toBe(0);
            });
        });
    });
});
