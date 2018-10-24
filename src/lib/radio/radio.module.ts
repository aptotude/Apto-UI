import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoRadioButton, AptoRadioGroup } from './radio.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoRadioGroup,
        AptoRadioButton
    ],
    exports: [
        AptoRadioGroup,
        AptoRadioButton
    ]
})
export class AptoRadioComponentModule { }
