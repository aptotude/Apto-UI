import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoGridContainerComponent} from './container.component';
import { AptoGridRowComponent, AptoGridColumnDirective  } from './row.component';

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
