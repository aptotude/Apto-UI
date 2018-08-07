import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoCardComponent } from './card.component';
import { AptoCardHeaderComponent, AptoCardHeaderNoPaddingBottomDirective } from './card-header.component';
import { AptoCardContentComponent, AptoCardNoPaddingDirective } from './card-content.component';
import { AptoCardFooterComponent, AptoCardFooterLeftDirective, AptoCardFooterRightDirective,  } from './card-footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoCardComponent,
        AptoCardHeaderComponent,
        AptoCardHeaderNoPaddingBottomDirective,
        AptoCardContentComponent,
        AptoCardNoPaddingDirective,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ],
    exports: [
        AptoCardComponent,
        AptoCardHeaderComponent,
        AptoCardHeaderNoPaddingBottomDirective,
        AptoCardContentComponent,
        AptoCardNoPaddingDirective,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ]
})
export class AptoCardComponentModule { }
