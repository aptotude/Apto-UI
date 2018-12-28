import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoListComponent } from './list.component';
import { AptoListItemComponent, AptoListItemIconDirective } from './list-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoListItemIconDirective,
        AptoListComponent,
        AptoListItemComponent
    ],
    exports: [
        AptoListItemIconDirective,
        AptoListComponent,
        AptoListItemComponent
    ]
})
export class AptoListComponentModule {}
