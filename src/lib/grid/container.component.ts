import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-container',
    templateUrl: 'container.html',
    styleUrls: ['./container.scss'],
    host: {
        'class': 'apto-container',
        '[class.apto-container--scroll]': 'scroll',
        '[class.apto-container--fixed]': 'fixed',
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridContainerComponent {
    @Input()
        get scroll(): boolean {
            return this._scroll;
        }
        set scroll(scroll: boolean) {
            this._scroll = coerceBooleanProperty(scroll);
        }
    @Input()
        get fixed(): boolean {
            return this._fixed;
        }
        set fixed(fixed: boolean) {
            this._fixed = coerceBooleanProperty(fixed);
        }

    private _scroll: boolean = false;
    private _fixed: boolean = false;
}
