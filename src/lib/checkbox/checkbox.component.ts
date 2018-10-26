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
    ChangeDetectorRef,
    forwardRef
} from '@angular/core';
import { coerceBooleanProperty } from '../utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    CanDisable,
    HasTabIndex,
    HasTabIndexCtor,
    CanDisableCtor,
    mixinTabIndex,
    mixinDisabled
} from '../core';

let nextUniqueId = 0;

export class AptoCheckboxChange {
    source: AptoCheckboxComponent;
    checked: boolean;
}

/**
 * Provider Expression that allows apto-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
export const APTO_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AptoCheckboxComponent),
    multi: true
};

export class AptoCheckboxBase {}

export const _AptoCheckboxMixinBase:
    HasTabIndexCtor &
    CanDisableCtor &
    typeof AptoCheckboxBase =
        mixinTabIndex(mixinDisabled(AptoCheckboxBase));

@Component({
    selector: 'apto-checkbox',
    templateUrl: 'checkbox.html',
    styleUrls: ['./checkbox.scss'],
    host: {
        'class': 'AptoCheckbox',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'null',
        '[class.AptoCheckbox--checked]': 'checked',
        '[class.AptoCheckbox--disabled]': 'disabled',
        '[class.AptoCheckbox--block]': 'block'
    },
    providers: [APTO_CHECKBOX_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoCheckboxComponent extends _AptoCheckboxMixinBase
    implements CanDisable, HasTabIndex, ControlValueAccessor {
    private _uniqueId = `AptoCheckbox-${++nextUniqueId}`;
    private _checked = false;
    private _block = false;
    private _disabled = false;
    private _required = false;

    @Input() public tabIndex: number;
    @Input() public name: string | null = null;
    @Input() public value: string | null = null;
    @Input() public id: string = this._uniqueId;
    @Input('aria-label') public ariaLabel = '';
    @Input('aria-labelledby') public ariaLabelledby: string | null = null;
    @Input()
        get checked(): boolean { return this._checked; }
        set checked(value: boolean) {
            if (value !== this.checked) {
                this._checked = coerceBooleanProperty(value);
                this._changeDetectorRef.markForCheck();
            }
        }
    @Input()
        get block() { return this._block; }
        set block(value: boolean) {
            if (value !== this.block) {
                this._block = coerceBooleanProperty(value);
            }
        }
    @Input()
        get disabled() { return this._disabled; }
        set disabled(value: boolean) {
            if (value !== this.disabled) {
                this._disabled = coerceBooleanProperty(value);
                this._changeDetectorRef.markForCheck();
            }
        }
    @Input()
        get required(): boolean { return this._required; }
        set required(value: boolean) {
            this._required = coerceBooleanProperty(value);
        }

    @ViewChild('input') public _inputElement: ElementRef;

    @Output() readonly change: EventEmitter<AptoCheckboxChange> =
        new EventEmitter<AptoCheckboxChange>();

    constructor(
        elementRef: ElementRef,
        private _changeDetectorRef: ChangeDetectorRef,
        @Attribute('tabindex') tabIndex: string
    ) {
        super();

        this.tabIndex = parseInt(tabIndex, 10) || 0;
    }

    public get inputId(): string {
        return `${this.id || this._uniqueId}-input`;
    }

    public _getAriaChecked(): 'true' | 'false' {
        return this.checked ? 'true' : 'false';
    }

    public _onInputChange(e: Event): void {
        event.stopPropagation();
    }

    public _onLabelTextChange(): void {
        this._changeDetectorRef.markForCheck();
    }

    public focus(): void {
        this._inputElement.nativeElement.focus();
    }

    public toggle(): void {
        this.checked = !this.checked;
    }

    public setValue(value: any): void {
        this.checked = !!value;
    }

    public _onTouched: () => any = () => {};

    // Implemented as part of ControlValueAccessor.
    public writeValue(value: any): void {
        this.checked = !!value;
    }

    // Implemented as part of ControlValueAccessor.
    public registerOnChange(fn: (value: any) => void): void {
        this._controlValueAccessorChangeFn = fn;
    }

    // Implemented as part of ControlValueAccessor.
    public registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    // Implemented as part of ControlValueAccessor.
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = coerceBooleanProperty(isDisabled);
    }

    public _onInputClick(e: Event): void {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
    }

    private _controlValueAccessorChangeFn: (value: any) => void = () => {};

    private _emitChangeEvent(): void {
        const event = new AptoCheckboxChange();
        event.source = this;
        event.checked = this.checked;

        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }
}
