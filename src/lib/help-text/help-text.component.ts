import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

@Component({
    template: '<ng-content></ng-content>',
    selector: 'apto-help-text',
    styleUrls: ['./help-text.scss'],
    host: {
        'class': 'AptoHelpText',
        '[class.AptoHelpText--error]': 'error',
        '[class.AptoHelpText--inline]': 'inline'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoHelpTextComponent {
    @Input() public error = false;
    @Input()
        get inline(): boolean {
            return this._inline;
        }
        set inline(inline: boolean) {
            this._inline = coerceBooleanProperty(inline);
        }
    private _inline = false;
}
