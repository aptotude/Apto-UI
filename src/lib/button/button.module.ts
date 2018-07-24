import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoButton } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoButton
    ],
    exports: [
        AptoButton
    ]
})
export class AptoButtonModule { }
