import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Input
} from '@angular/core';

@Component({
    selector: 'apto-tab-pane, [aptoTabPane]',
    templateUrl: 'tab-pane.html',
    styleUrls: ['tab-pane.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'class': 'AptoTabPane'},
})
export class AptoTabPaneComponent {
    @Input() public content: any;
    @Input() public position: number | null;
    @Input() public active: boolean | null;
}
