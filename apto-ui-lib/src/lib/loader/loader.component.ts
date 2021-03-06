import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-loader',
    templateUrl: 'loader.html',
    styleUrls: ['./loader.scss'],
    host: {
        'class': 'AptoLoader',
        '[class.AptoLoader--noOverlay]': 'noOverlay'
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

    private _noOverlay = false;
}
