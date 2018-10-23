import { async as ngAsync, TestBed, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { Component, DebugElement, Type } from '@angular/core';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AptoCheckboxComponent, AptoCheckboxChange } from './checkbox.component';
import { AptoCheckboxComponentModule } from './checkbox.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <apto-checkbox
            [checked]="checked"
            [required]="required"
            [disabled]="disabled"
            [value]="value"
            [name]="name"
            [id]="id"
            [aria-label]="ariaLabel"
            [aria-labelledby]="ariaLabelledby"
            [tabindex]="tabindex"
            (click)="onCheckboxClick($event)"
            (change)="onCheckboxChange($event)"
        >my label</apto-checkbox>
    `
})
class TestComponent {
    checked = false;
    required = false;
    disabled = false;
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
    template: `
      <form>
        <apto-checkbox name="cb" [(ngModel)]="isGood">Be good</apto-checkbox>
      </form>
    `,
})
class CheckboxWithFormDirectivesComponent {
    isGood: boolean = false;
}

@Component({
    template: `<apto-checkbox [required]="isRequired" [(ngModel)]="isGood">Be good</apto-checkbox>`,
})
class CheckboxWithNgModelComponent {
    isGood: boolean = false;
    isRequired: boolean = true;
}

fdescribe('apto-checkbox', () => {
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
            expect(testComponent.checked).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(false);

            testComponent.checked = true;
            fixture.detectChanges();

            expect(checkboxInstance.checked).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');
            expect(inputElement.checked).toBe(true);

            testComponent.checked = false;
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

            testComponent.disabled = true;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--disabled');
            expect(inputElement.disabled).toBe(true);

            testComponent.disabled = false;
            fixture.detectChanges();

            expect(checkboxInstance.disabled).toBe(false);
            expect(checkboxNativeElement.classList).not.toContain('AptoCheckbox--disabled');
            expect(inputElement.tabIndex).toBe(0);
            expect(inputElement.disabled).toBe(false);
        });

        it('should not toggle checked state upon click while disabled', () => {
            testComponent.disabled = true;
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
            let label = <HTMLLabelElement>checkboxNativeElement.querySelector('.AptoCheckbox-labelContainer');
            expect(label.textContent!.trim()).toBe('my label');
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

            testComponent.checked = true;
            fixture.detectChanges();

            expect(inputElement.checked).toBe(true);
            expect(checkboxNativeElement.classList).toContain('AptoCheckbox--checked');

            fixture.detectChanges();
            flush();

            expect(testComponent.onCheckboxChange).not.toHaveBeenCalled();
        }));

        it('should forward the required attribute', () => {
            testComponent.required = true;
            fixture.detectChanges();

            expect(inputElement.required).toBe(true);

            testComponent.required = false;
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
            expect(checkboxNativeElement.querySelector('svg')!.getAttribute('focusable')).toBe('false');
        });

        describe('aria', () => {
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

            it('should toggle aria-checked', () => {
                expect(inputElement.getAttribute('aria-checked')).toEqual('false');

                testComponent.checked = true;
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-checked')).toEqual('true');

                testComponent.checked = false;
                fixture.detectChanges();
                expect(inputElement.getAttribute('aria-checked')).toEqual('false');
            });
        });
    });

    describe('with provided tabIndex', () => {

    });

    describe('with multiple checkboxes', () => {
        beforeEach(() => {
            fixture = createComponent(MultipleCheckboxesComponent);
            fixture.detectChanges();
        });

        it('should assign a unique id to each checkbox', () => {
            let [firstId, secondId] =
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

            let checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            let ngModel = checkboxElement.injector.get<NgModel>(NgModel);

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

    fdescribe('with required ngModel', () => {
        let checkboxInstance: AptoCheckboxComponent;
        let inputElement: HTMLInputElement;
        let testComponent: CheckboxWithNgModelComponent;

        beforeEach(() => {
            fixture = createComponent(CheckboxWithNgModelComponent);
            fixture.detectChanges();

            let checkboxDebugElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            let checkboxNativeElement = checkboxDebugElement.nativeElement;
            testComponent = fixture.debugElement.componentInstance;
            checkboxInstance = checkboxDebugElement.componentInstance;
            inputElement = <HTMLInputElement>checkboxNativeElement.querySelector('input');
        });

        it('should validate with RequiredTrue validator', () => {
            let checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            let ngModel = checkboxElement.injector.get<NgModel>(NgModel);

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

    });

    describe('with name attribute', () => {
        beforeEach(() => {
            fixture = createComponent(CheckboxWithNameAttributeComponent);
            fixture.detectChanges();
        });

        it('should forward name value to input element', () => {
            let checkboxElement = fixture.debugElement.query(By.directive(AptoCheckboxComponent));
            let inputElement = <HTMLInputElement> checkboxElement.nativeElement.querySelector('input');

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
