import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-card-content',
    template: '<ng-content></ng-content>',
    styleUrls: ['./card-content.scss'],
    host: {
        'class': 'AptoCardContent',
        '[class.AptoCardContent--noPadding]': 'noPadding',
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardContentComponent {
    @Input()
        get noPadding(): boolean {
            return this._noPadding;
        }
        set noPadding(noPadding: boolean) {
            this._noPadding = coerceBooleanProperty(noPadding);
        }
    private _noPadding = false;
}
