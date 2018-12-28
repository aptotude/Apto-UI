import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoRadioButtonComponent, AptoRadioGroupDirective } from './radio.component';
import { UniqueSelectionDispatcher } from './unique-selection-dispatcher';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoRadioGroupDirective,
        AptoRadioButtonComponent
    ],
    exports: [
        AptoRadioGroupDirective,
        AptoRadioButtonComponent
    ],
    providers: [
        UniqueSelectionDispatcher
    ]
})
export class AptoRadioButtonComponentModule { }
