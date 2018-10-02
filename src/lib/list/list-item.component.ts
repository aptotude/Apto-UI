import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Directive } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Directive({
  selector: '[apto-list-item-icon], [aptoListItemIcon]',
  host: {'class': 'AptoListItem-icon'}
})
export class AptoListItemIconDirective {}

@Component({
    selector: 'apto-list-item',
    templateUrl: 'list-item.html',
    styleUrls: ['./list-item.scss'],
    host: {
        'class': 'AptoListItem',
        '[class.AptoListItem--link]': 'link'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoListItemComponent {
    @Input()
        get link(): boolean {
            return this._link;
        }
        set link(link: boolean) {
            this._link = coerceBooleanProperty(link);
        }

    private _link = false;
}
