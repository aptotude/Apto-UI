import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoGridContainerComponent, AptoGridColumnDirective, AptoGridRowComponent  } from './grid.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoGridContainerComponent,
        AptoGridColumnDirective,
        AptoGridRowComponent
    ],
    exports: [
        AptoGridContainerComponent,
        AptoGridColumnDirective,
        AptoGridRowComponent
    ]
})
export class AptoGridComponentModule {}
