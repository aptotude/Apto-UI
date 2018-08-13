import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Input
} from '@angular/core';
import {
    AptoTabComponent
} from './tab.component';

@Component({
    selector: 'apto-tab-pane, [aptoTabPane]',
    templateUrl: 'tab-pane.html',
    styleUrls: ['tab-pane.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'class': 'apto-tabs-pane'},
})
export class AptoTabPaneComponent {
    @Input() public content: any;
    @Input() public position: number | null;
    @Input() public active: boolean | null;
}
