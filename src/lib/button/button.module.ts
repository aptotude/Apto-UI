import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoButtonComponent, AptoHoldButtonDirective } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoButtonComponent,
        AptoHoldButtonDirective
    ],
    exports: [
        AptoButtonComponent,
        AptoHoldButtonDirective
    ]
})
export class AptoButtonComponentModule { }
