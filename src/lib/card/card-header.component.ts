import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-card-header',
    template: '<ng-content></ng-content>',
    styleUrls: ['./card-header.scss'],
    host: {
        'class': 'AptoCardHeader',
        '[class.AptoCardHeader--noBottomPadding]': 'noBottomPadding',
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardHeaderComponent {
    @Input()
        get noBottomPadding(): boolean {
            return this._noBottomPadding;
        }
        set noBottomPadding(noBottomPadding: boolean) {
            this._noBottomPadding = coerceBooleanProperty(noBottomPadding);
        }
    private _noBottomPadding = false;
}
