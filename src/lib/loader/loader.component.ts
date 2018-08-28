import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Directive } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-loader',
    templateUrl: 'loader.html',
    styleUrls: ['./loader.scss'],
    host: {
        'class': 'apto-loader',
        '[class.apto-loader--no-overlay]': 'noOverlay'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoLoaderComponent {
    @Input() public text = '';
    @Input()
        get noOverlay(): boolean {
            return this._noOverlay;
        }
        set noOverlay(noOverlay: boolean) {
            this._noOverlay = coerceBooleanProperty(noOverlay);
        }

    private _noOverlay: boolean = false;
}
