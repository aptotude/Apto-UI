import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoCheckboxComponent } from './checkbox.component';
import { AptoCheckboxRequiredValidatorDirective} from './checkbox-required-validator.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoCheckboxComponent,
        AptoCheckboxRequiredValidatorDirective
    ],
    exports: [
        AptoCheckboxComponent,
        AptoCheckboxRequiredValidatorDirective
    ]
})
export class AptoCheckboxComponentModule { }
