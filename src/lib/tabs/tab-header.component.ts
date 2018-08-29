import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'apto-tab-header, [aptoTabHeader]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tab-header.scss'],
    host: {'class': 'apto-tabs-nav'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoTabHeaderComponent {}
