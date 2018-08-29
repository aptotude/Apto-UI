import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoCardComponent } from './card.component';
import { AptoCardHeaderComponent } from './card-header.component';
import { AptoCardContentComponent } from './card-content.component';
import { AptoCardFooterComponent, AptoCardFooterLeftDirective, AptoCardFooterRightDirective,  } from './card-footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoCardComponent,
        AptoCardHeaderComponent,
        AptoCardContentComponent,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ],
    exports: [
        AptoCardComponent,
        AptoCardHeaderComponent,
        AptoCardContentComponent,
        AptoCardFooterComponent,
        AptoCardFooterLeftDirective,
        AptoCardFooterRightDirective
    ]
})
export class AptoCardComponentModule { }
