import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    Output,
    EventEmitter,
    ElementRef,
    ViewChild,
    Attribute,
    ChangeDetectorRef
} from '@angular/core';
import { coerceBooleanProperty } from '../utils';

let nextUniqueId = 0;

export class AptoCheckboxChange {
    source: AptoCheckboxComponent;
    checked: boolean;
}

@Component({
    selector: 'apto-checkbox',
    templateUrl: 'checkbox.html',
    styleUrls: ['./checkbox.scss'],
    host: {
        'class': 'AptoCheckbox',
        '[class.AptoCheckbox--checked]': 'checked',
        '[class.AptoCheckbox--disabled]': 'disabled'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoCheckboxComponent {
    private _uniqueId = `AptoCheckbox-${++nextUniqueId}`;
    public tabIndex = 0;
    @Input() public name: string | null = null;
    @Input() public value: string | null = null;
    @Input() id: string = this._uniqueId;
    @Input('aria-label') ariaLabel = '';
    @Input('aria-labelledby') ariaLabelledby: string | null = null;
    @ViewChild('input') public _inputElement: ElementRef;
    @Output() readonly change: EventEmitter<AptoCheckboxChange> =
        new EventEmitter<AptoCheckboxChange>();

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        @Attribute('tabindex') tabIndex: string
    ) {
        this.tabIndex = parseInt(tabIndex, 10) || 0;
    }

    public get inputId(): string {
        return `${this.id || this._uniqueId}-input`;
    }

    @Input()
        get checked(): boolean {
            return this._checked;
        }
        set checked(value: boolean) {
            if (value !== this.checked) {
                this._checked = coerceBooleanProperty(value);
                this._changeDetectorRef.markForCheck();
            }
        }
    private _checked = false;

    @Input()
        get disabled() {
            return this._disabled;
        }
        set disabled(value: boolean) {
            if (value !== this.disabled) {
                this._disabled = coerceBooleanProperty(value);
                this._changeDetectorRef.markForCheck();
            }
        }
    private _disabled = false;

    @Input()
        get required(): boolean {
            return this._required;
        }
        set required(value: boolean) {
            this._required = coerceBooleanProperty(value);
        }
    private _required = false;

    private _emitChangeEvent() {
        const event = new AptoCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this.change.emit(event);
    }

    public _getAriaChecked(): 'true' | 'false' {
        return this.checked ? 'true' : 'false';
    }

    public _onInputChange(e: Event): void {
        event.stopPropagation();
    }

    public focus(): void {
        this._inputElement.nativeElement.focus('keyboard');
    }

    public toggle(): void {
        this.checked = !this.checked;
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled = coerceBooleanProperty(isDisabled);
    }

    public setValue(value: any) {
        this.checked = !!value;
    }

    public _onInputClick(e: Event): void {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
    }
}
