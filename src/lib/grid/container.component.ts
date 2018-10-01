import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    selector: 'apto-container',
    template: '<ng-content></ng-content>',
    styleUrls: ['./container.scss'],
    host: {
        'class': 'AptoContainer',
        '[class.AptoContainer--scroll]': 'scroll',
        '[class.AptoContainer--fixed]': 'fixed'
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
    private _scroll = false;

    @Input()
        get fixed(): boolean {
            return this._fixed;
        }
        set fixed(fixed: boolean) {
            this._fixed = coerceBooleanProperty(fixed);
        }
    private _fixed = false;
}
