import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoGridContainerComponent, AptoGridContainerScrollDirective, AptoGridContainerFixedDirective } from './container.component';
import { AptoGridRowComponent, AptoGridColumnDirective, AptoGridNoGutterDirective  } from './row.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoGridContainerComponent,
        AptoGridContainerScrollDirective,
        AptoGridContainerFixedDirective,
        AptoGridColumnDirective,
        AptoGridNoGutterDirective,
        AptoGridRowComponent
    ],
    exports: [
        AptoGridContainerComponent,
        AptoGridContainerScrollDirective,
        AptoGridContainerFixedDirective,
        AptoGridColumnDirective,
        AptoGridNoGutterDirective,
        AptoGridRowComponent
    ]
})
export class AptoGridComponentModule {}
