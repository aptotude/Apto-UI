import {
    Directive,
    forwardRef,
    Provider,
} from '@angular/core';
import {
    CheckboxRequiredValidator,
    NG_VALIDATORS,
} from '@angular/forms';

export const APTO_CHECKBOX_REQUIRED_VALIDATOR: Provider = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AptoCheckboxRequiredValidatorDirective),
    multi: true
};

@Directive({
    selector: `apto-checkbox[required][formControlName],
                apto-checkbox[required][formControl], apto-checkbox[required][ngModel]`,
    providers: [
        APTO_CHECKBOX_REQUIRED_VALIDATOR
    ],
    host: {
        '[attr.required]': 'required ? "" : null'
    }
})
export class AptoCheckboxRequiredValidatorDirective extends CheckboxRequiredValidator {}
