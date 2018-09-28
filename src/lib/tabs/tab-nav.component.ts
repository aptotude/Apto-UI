import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'apto-tab-nav,[aptoTabNav]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tab-nav.scss'],
    host: {'class': 'AptoTabNav'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoTabNavComponent {}
