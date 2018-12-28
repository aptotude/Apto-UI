import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoTooltipComponent, AptoTooltipTriggerDirective, AptoTooltipContentDirective  } from './tooltip.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoTooltipComponent,
        AptoTooltipTriggerDirective,
        AptoTooltipContentDirective
    ],
    exports: [
        AptoTooltipComponent,
        AptoTooltipTriggerDirective,
        AptoTooltipContentDirective
    ]
})
export class AptoTooltipComponentModule {}
