import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoTabComponent, AptoTabContentDirective, AptoTabLabelDirective } from './tab.component';
import { AptoTabHeaderComponent } from './tab-header.component';
import { AptoTabGroupComponent } from './tab-group.component';
import { AptoTabPaneComponent } from './tab-pane.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoTabGroupComponent,
        AptoTabComponent,
        AptoTabHeaderComponent,
        AptoTabPaneComponent,
        AptoTabContentDirective,
        AptoTabLabelDirective
    ],
    exports: [
        AptoTabGroupComponent,
        AptoTabComponent,
        AptoTabHeaderComponent,
        AptoTabPaneComponent,
        AptoTabContentDirective,
        AptoTabLabelDirective
    ]
})
export class AptoTabsComponentModule { }
