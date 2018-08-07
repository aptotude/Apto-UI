import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoCardComponent, AptoCardHeaderDirective } from './card.component';
import { AptoCardFooterComponent, AptoCardFooterLeftDirective, AptoCardFooterRightDirective } from './card-footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoCardComponent,
        AptoCardHeaderDirective,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ],
    exports: [
        AptoCardComponent,
        AptoCardHeaderDirective,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ]
})
export class AptoCardComponentModule { }
