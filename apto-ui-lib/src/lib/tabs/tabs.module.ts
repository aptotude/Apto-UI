import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoTabComponent, AptoTabContentDirective, AptoTabLabelDirective } from './tab.component';
import { AptoTabNavComponent } from './tab-nav.component';
import { AptoTabGroupComponent } from './tab-group.component';
import { AptoTabPaneComponent } from './tab-pane.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoTabGroupComponent,
        AptoTabComponent,
        AptoTabNavComponent,
        AptoTabPaneComponent,
        AptoTabContentDirective,
        AptoTabLabelDirective
    ],
    exports: [
        AptoTabGroupComponent,
        AptoTabComponent,
        AptoTabNavComponent,
        AptoTabPaneComponent,
        AptoTabContentDirective,
        AptoTabLabelDirective
    ]
})
export class AptoTabsComponentModule { }
