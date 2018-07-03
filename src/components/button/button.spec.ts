import { AptoButton, ButtonKinds, ButtonTypes } from './button.component';
import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';

describe('apto-button', () => {
    let fixture: ComponentFixture<AptoButton>;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AptoButton ]
        }).compileComponents();

        fixture = TestBed.createComponent(AptoButton);

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
                    fixture.componentInstance.kind = ButtonKinds.Primary;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--primary')).toBe(true);
                });
            });

            describe('secondary', () => {
                beforeEach(() => {
                    fixture.componentInstance.kind = ButtonKinds.Secondary;
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
                    fixture.componentInstance.type = ButtonTypes.Button;
                    fixture.detectChanges();
                });

                it('has the correct class name', () => {
                    const button = fixture.nativeElement.querySelector('button');

                    expect(button.className.includes('apto-button--button')).toBe(true);
                });
            });

            describe('link', () => {
                beforeEach(() => {
                    fixture.componentInstance.type = ButtonTypes.Link;
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
            fixture.componentInstance.text = mockText;
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
                fixture.componentInstance.active = true;
                fixture.detectChanges();
            });

            it('disabled is false', () => {
                const button = fixture.nativeElement.querySelector('button');

                expect(button.disabled).toBe(false);
            });
        });

        describe('when not active', () => {
            beforeEach(() => {
                fixture.componentInstance.active = false;
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
                fixture.componentInstance.title = mockText;
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
});