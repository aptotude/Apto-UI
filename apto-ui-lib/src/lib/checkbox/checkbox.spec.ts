import { async as ngAsync, TestBed, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { Component, DebugElement, Type, ViewChild } from '@angular/core';
import { NgModel, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AptoCheckboxComponent, AptoCheckboxChange } from './checkbox.component';
import { AptoCheckboxComponentModule } from './checkbox.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <apto-checkbox
            [checked]="isChecked"
            [required]="isRequired"
            [disabled]="isDisabled"
            [value]="value"
            [name]="name"
            [id]="id"
            [block]="isBlock"
            [aria-label]="ariaLabel"
            [aria-labelledby]="ariaLabelledby"
            [tabindex]="tabindex"
            (click)="onCheckboxClick($event)"
            (change)="onCheckboxChange($event)"
        >my label</apto-checkbox>
    `
})
class TestComponent {
    isChecked = false;
    isRequired = false;
    isDisabled = false;
    isBlock = false;
    value = 'my_value';
    name = null;
    id = 'my-id';
    ariaLabel = null;
    ariaLabelledby = null;
    tabindex = null;
    onCheckboxClick: (event?: Event) => void = () => {};
    onCheckboxChange: (event?: AptoCheckboxChange) => void = () => {};
}

@Component({
    template: `<apto-checkbox>{{ label }}</apto-checkbox>`
})
class CheckboxWithoutLabelComponent {
    label: string;
}

@Component({
    template: `<apto-checkbox name="test-name"></apto-checkbox>`
})
class CheckboxWithNameAttributeComponent {
    label: string;
}

@Component({
    template: `<apto-checkbox></apto-checkbox><apto-checkbox></apto-checkbox>`
})
class MultipleCheckboxesComponent {
    label: string;
}

@Component({
    template: `<apto-checkbox tabindex="5"></apto-checkbox>`
})
class CheckboxWithTabindexAttrComponent {}

@Component({
    template: `
      <apto-checkbox
          [tabIndex]="customTabIndex"
          [disabled]="isDisabled">
      </apto-checkbox>`,
})
class CheckboxWithTabIndexComponent {
    customTabIndex = 7;
    isDisabled = false;
}

@Component({
    template: `
      <form>
        <apto-checkbox name="foo" [(ngModel)]="isGood">Be good</apto-checkbox>
      </form>
    `
})
class CheckboxWithFormDirectivesComponent {
    isGood = false;
}

@Component({
    template: `<apto-checkbox (change)="lastEvent = $event"></apto-checkbox>`
})
class CheckboxWithChangeEventComponent {
    lastEvent: AptoCheckboxChange;
}

@Component({
    template: `<apto-checkbox></apto-checkbox>`
})
class CheckboxUsingViewChildComponent {
    @ViewChild(AptoCheckboxComponent) checkbox;

    public set isDisabled(value: boolean) {
        this.checkbox.disabled = value;
    }
}

@Component({
    template: `<apto-checkbox [formControl]="formControl"></apto-checkbox>`
})
class CheckboxWithFormControlComponent {
    formControl = new FormControl();
}

@Component({
    template: `<apto-checkbox [required]="isRequired" [(ngModel)]="isGood">Be good</apto-checkbox>`,
})
class CheckboxWithNgModelComponent {
    isGood = false;
    isRequired = true;
}

describe('apto-checkbox', () => {
    let fixture: ComponentFixture<any>;

    function createComponent<T>(componentType: Type<T>): ComponentFixture<T> {
        TestBed.configureTestingModule({
            imports: [AptoCheckboxComponentModule, FormsModule, ReactiveFormsModule],
            declarations: [componentType],
        }).compileComponents();
        return TestBed.createComponent<T>(componentType);
    }

    describe('basic behavior', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxNativeElement: HTMLElement;
        let checkboxInstance: AptoCheckboxComponent;
        let testComponent: TestComponent;
        let inputElement: HTMLInputElement;
        let labelElement: HTMLLabelElement;

        beforeEach(ngAsync(() => {
            fixture = createComponent(TestComponent);
            fixture.detectChanges();

            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxNativeElement = checkboxDebugElement.nativeElement;
            checkboxInstance = checkboxDebugElement.componentInstance;
            testComponent = fixture.debugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
            labelElement = <HTMLLabelElement>checkboxNativeElement.querySelector('label');
        }));

        it('should have correct base class', () => {
            expect(checkboxNativeElement.className).toBe('AptoCheckbox');
        });

        it('should add and remove checked state', () => {
            expect(testComponent.isChecked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(false);

            testComponent.isChecked = true;
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(true);

            testComponent.isChecked = false;
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(false);
        });

        it('should change native element checked when checked programmatically', () => {
            expect(inputElement.checked).toBe(false);

            checkboxInstance.checked = true;
            fixture.detectChanges();

            expect(inputElement.checked).toBe(true);
        });

        it('should toggle checked state on click', () => {
            expect(checkboxInstance.checked).toBe(false);

            labelElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(true);

            labelElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(false);
        });

        it('should add and remove disabled state', () => {
            expect(checkboxInstance.disabled).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--disabled');
            expect(inputElement.tabIndex).toBe(0);
            expect(inputElement.disabled).toBe(false);

            testComponent.isDisabled = true;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--disabled');
            expect(inputElement.disabled).toBe(true);

            testComponent.isDisabled = false;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--disabled');
            expect(inputElement.tabIndex).toBe(0);
            expect(inputElement.disabled).toBe(false);
        });

        it('should add and remove block state', () => {
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--block');

            testComponent.isBlock = true;
            fixture.detectChanges();

            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--block');

            testComponent.isBlock = false;
            fixture.detectChanges();

            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--block');
        });

        it('should not toggle checked state upon click while disabled', () => {
            testComponent.isDisabled = true;
            fixture.detectChanges();

            checkboxNativeElement.click();
            expect(checkboxInstance.checked).toBe(false);
        });

        it('should preserve the user-provided id', () => {
            expect(inputElement.id).toBe('my-id-input');
        });

        it('should generate a unique id for the checkbox input if no id is set', () => {
            testComponent.id = null;
            fixture.detectChanges();
            expect(inputElement.id).toMatch(/AptoCheckbox-\d+/);
        });

        it('should project the checkbox content into the label element', () => {
            const label = <HTMLLabelElement>checkboxNativeElement.querySelector('.AptoCheckbox-labelContainer');
            expect(label.textContent).toContain('my label');
        });

        it('should make the host element a tab stop', () => {
            expect(inputElement.tabIndex).toBe(0);
        });

        it('should not trigger the click event multiple times', () => {
            spyOn(testComponent, 'onCheckboxClick');

            expect(inputElement.checked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');

            labelElement.click();
            fixture.detectChanges();

            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(true);

            expect(testComponent.onCheckboxClick).toHaveBeenCalledTimes(1);
        });

        it('should trigger a change event when the native input does', fakeAsync(() => {
            spyOn(testComponent, 'onCheckboxChange');

            expect(inputElement.checked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');

            labelElement.click();
            fixture.detectChanges();

            expect(inputElement.checked).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');

            fixture.detectChanges();
            flush();

            expect(testComponent.onCheckboxChange).toHaveBeenCalledTimes(1);
        }));

        it('should not trigger the change event by changing the native value', fakeAsync(() => {
            spyOn(testComponent, 'onCheckboxChange');

            expect(inputElement.checked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');

            testComponent.isChecked = true;
            fixture.detectChanges();

            expect(inputElement.checked).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');

            fixture.detectChanges();
            flush();

            expect(testComponent.onCheckboxChange).not.toHaveBeenCalled();
        }));

        it('should forward the required attribute', () => {
            testComponent.isRequired = true;
            fixture.detectChanges();

            expect(inputElement.required).toBe(true);

            testComponent.isRequired = false;
            fixture.detectChanges();

            expect(inputElement.required).toBe(false);
        });

        it('should focus on underlying input element when focus() is called', () => {
            expect(document.activeElement).not.toBe(inputElement);

            checkboxInstance.focus();
            fixture.detectChanges();

            expect(document.activeElement).toBe(inputElement);
        });

        it('should forward the value to input element', () => {
            testComponent.value = 'basic_checkbox';
            fixture.detectChanges();

            expect(inputElement.value).toBe('basic_checkbox');
        });

        it('should remove the SVG checkmark from the tab order', () => {
            expect(checkboxNativeElement.querySelector('svg').getAttribute('focusable')).toBe('false');
        });

        describe('aria-label', () => {
            it('should have aria-label', () => {
                testComponent.ariaLabel = 'labeled';
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-label')).toEqual('labeled');
            });

            it('should not have aria-label', () => {
                testComponent.ariaLabel = null;
                fixture.detectChanges();
                expect(inputElement.hasAttribute('aria-label')).toBe(false);
            });
        });

        describe('aria-labelledby', () => {
            it('should have aria-labelledby', () => {
                testComponent.ariaLabelledby = 'labelledby';
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-labelledby')).toEqual('labelledby');
            });

            it('should not have aria-labelledby', () => {
                testComponent.ariaLabelledby = null;
                fixture.detectChanges();
                expect(inputElement.hasAttribute('aria-labelledby')).toBe(false);
            });
        });

        describe('aria-checked', () => {
            it('should toggle aria-checked', () => {
                expect(inputElement.getAttribute('aria-checked')).toEqual('false');

                testComponent.isChecked = true;
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-checked')).toEqual('true');

                testComponent.isChecked = false;
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-checked')).toEqual('false');
            });
        });
    });

    describe('with change event and no initial value', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxNativeElement: HTMLElement;
        let checkboxInstance: AptoCheckboxComponent;
        let testComponent: CheckboxWithChangeEventComponent;
        let inputElement: HTMLInputElement;
        let labelElement: HTMLLabelElement;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithChangeEventComponent);
            fixture.detectChanges();

            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxNativeElement = checkboxDebugElement.nativeElement;
            checkboxInstance = checkboxDebugElement.componentInstance;
            testComponent = fixture.debugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
            labelElement = <HTMLLabelElement>checkboxNativeElement.querySelector('label');
        });

        it('should emit the event to the change observable', () => {
            const changeSpy = jasmine.createSpy('onChangeObservable');

            checkboxInstance.change.subscribe(changeSpy);

            fixture.detectChanges();
            expect(changeSpy).not.toHaveBeenCalled();

            labelElement.click();
            fixture.detectChanges();

            expect(changeSpy).toHaveBeenCalledTimes(1);
        });

        it('should not emit a DOM event to the change output', fakeAsync(() => {
            fixture.detectChanges();
            expect(testComponent.lastEvent).toBeUndefined();

            inputElement.click();
            fixture.detectChanges();
            flush();

            expect(testComponent.lastEvent.checked).toBe(true);
        }));
    });

    describe('with provided tabIndex', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxNativeElement: HTMLElement;
        let testComponent: CheckboxWithTabIndexComponent;
        let inputElement: HTMLInputElement;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithTabIndexComponent);
            fixture.detectChanges();

            testComponent = fixture.debugElement.componentInstance;
            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxNativeElement = checkboxDebugElement.nativeElement;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
        });

        it('should preserve any given tabIndex', () => {
            expect(inputElement.tabIndex).toBe(7);
        });

        it('should preserve given tabIndex when the checkbox is disabled then enabled', () => {
            testComponent.isDisabled = true;
            fixture.detectChanges();

            testComponent.customTabIndex = 13;
            fixture.detectChanges();

            testComponent.isDisabled = false;
            fixture.detectChanges();

            expect(inputElement.tabIndex).toBe(13);
        });

    });

    describe('with native tabindex attribute', () => {
        it('should properly detect native tabindex attribute', fakeAsync(() => {
            fixture = createComponent(CheckboxWithTabindexAttrComponent);
            fixture.detectChanges();

            const checkbox = fixture.debugElement
                .query(By.directive(AptoCheckboxComponent)).componentInstance as AptoCheckboxComponent;

            expect(checkbox.tabIndex)
                .toBe(5, 'Expected tabIndex property to have been set based on the native attribute');
        }));
    });


    describe('using ViewChild', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxNativeElement: HTMLElement;
        let testComponent: CheckboxUsingViewChildComponent;

        beforeEach(() => {
            fixture = createComponent(CheckboxUsingViewChildComponent);
            fixture.detectChanges();

            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxNativeElement = checkboxDebugElement.nativeElement;
            testComponent = fixture.debugElement.componentInstance;
        });

        it('should toggle checkbox disabledness correctly', () => {
            const checkboxInstance = checkboxDebugElement.componentInstance;
            const inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
            expect(checkboxInstance.disabled).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--disabled');
            expect(inputElement.tabIndex).toBe(0);
            expect(inputElement.disabled).toBe(false);

            testComponent.isDisabled = true;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--disabled');
            expect(inputElement.disabled).toBe(true);

            testComponent.isDisabled = false;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--disabled');
            expect(inputElement.tabIndex).toBe(0);
            expect(inputElement.disabled).toBe(false);
        });
    });

    describe('with multiple checkboxes', () => {
        beforeEach(() => {
            fixture = createComponent(MultipleCheckboxesComponent);
            fixture.detectChanges();
        });

        it('should assign a unique id to each checkbox', () => {
            const [firstId, secondId] =
                fixture.debugElement.queryAll(By.directive(AptoCheckboxComponent))
                .map(debugElement => debugElement.nativeElement.querySelector('input').id);

            expect(firstId).toMatch(/AptoCheckbox-\d+-input/);
            expect(secondId).toMatch(/AptoCheckbox-\d+-input/);
            expect(firstId).not.toEqual(secondId);
        });
    });

    describe('with ngModel', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxNativeElement: HTMLElement;
        let checkboxInstance: AptoCheckboxComponent;
        let inputElement: HTMLInputElement;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithFormDirectivesComponent);
            fixture.detectChanges();

            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxNativeElement = checkboxDebugElement.nativeElement;
            checkboxInstance = checkboxDebugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
        });

        it('should be in pristine, untouched, and valid states initially', fakeAsync(() => {
            flush();

            const checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            const ngModel = checkboxElement.injector.get<NgModel>(NgModel);

            expect(ngModel.valid).toBe(true);
            expect(ngModel.pristine).toBe(true);
            expect(ngModel.touched).toBe(false);
        }));

        it('should toggle checked state on click', () => {
            expect(checkboxInstance.checked).toBe(false);

            inputElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(true);

            inputElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(false);
        });
    });

    describe('with required ngModel', () => {
        let checkboxInstance: AptoCheckboxComponent;
        let inputElement: HTMLInputElement;
        let testComponent: CheckboxWithNgModelComponent;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithNgModelComponent);
            fixture.detectChanges();

            const checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            const checkboxNativeElement = checkboxDebugElement.nativeElement;
            testComponent = fixture.debugElement.componentInstance;
            checkboxInstance = checkboxDebugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
        });

        it('should validate with RequiredTrue validator', () => {
            const checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            const ngModel = checkboxElement.injector.get<NgModel>(NgModel);

            testComponent.isRequired = true;
            inputElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(true);
            expect(ngModel.valid).toBe(true);

            inputElement.click();
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(false);
            expect(ngModel.valid).toBe(false);
        });
    });

    describe('with form control', () => {
        let checkboxDebugElement: DebugElement;
        let checkboxInstance: AptoCheckboxComponent;
        let testComponent: CheckboxWithFormControlComponent;
        let inputElement: HTMLInputElement;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithFormControlComponent);
            fixture.detectChanges();

            checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            checkboxInstance = checkboxDebugElement.componentInstance;
            testComponent = fixture.debugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxDebugElement.nativeElement.querySelector('input');
        });

        it('should toggle the disabled state', () => {
            expect(checkboxInstance.disabled).toBe(false);

            testComponent.formControl.disable();
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(true);
            expect(inputElement.disabled).toBe(true);

            testComponent.formControl.enable();
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(false);
            expect(inputElement.disabled).toBe(false);
        });
    });

    describe('with name attribute', () => {
        beforeEach(() => {
            fixture = createComponent(CheckboxWithNameAttributeComponent);
            fixture.detectChanges();
        });

        it('should forward name value to input element', () => {
            const checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            const inputElement = <HTMLInputElement> checkboxElement.nativeElement.querySelector('input');

            expect(inputElement.getAttribute('name')).toBe('test-name');
        });
    });

    describe('without label', () => {
        let testComponent: CheckboxWithoutLabelComponent;
        let checkboxInnerContainer: HTMLElement;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithoutLabelComponent);

            const checkboxDebugEl = fixture.debugElement.query(By.directive(AptoCheckboxComponent));

            testComponent = fixture.componentInstance;
            checkboxInnerContainer = checkboxDebugEl
                .query(By.css('.AptoCheckbox-container')).nativeElement;
        });

        it('should remove margin for checkbox without a label', () => {
            fixture.detectChanges();

            expect(checkboxInnerContainer.classList)
                .toContain('AptoCheckbox-container--noSideMargin');
        });

        it('should not remove margin if initial label is set through binding', () => {
            testComponent.label = 'Some content';
            fixture.detectChanges();

            expect(checkboxInnerContainer.classList)
                .not.toContain('AptoCheckbox-container--noSideMargin');
        });
    });
});
