import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoIconComponent, AptoIconCircleDirective, AptoIconInlineDirective } from './icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoIconComponent,
        AptoIconCircleDirective,
        AptoIconInlineDirective
    ],
    exports: [
        AptoIconComponent,
        AptoIconCircleDirective,
        AptoIconInlineDirective
    ]
})
export class AptoIconComponentModule { }
