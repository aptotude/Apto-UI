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

@Component({
    moduleId: module.id,
    selector: 'apto-checkbox',
    templateUrl: 'checkbox.html',
    styleUrls: ['./checkbox.scss'],
    host: {
        'class': 'AptoCheckbox',
        '[class.AptoCheckbox--checked]': 'checked',
        '[class.AptoCheckbox--disabled]': 'disabled',
        '[class.AptoCheckbox--required]': 'required'
    },
    providers: [APTO_CHECKBOX_CONTROL_VALUE_ACCESSOR],
    inputs: ['tabIndex'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoCheckboxComponent implements ControlValueAccessor {
    private _uniqueId = `AptoCheckbox-${++nextUniqueId}`;
    public tabIndex = 0;
    @Input() public name: string | null = null;
    @Input() public value: string | null = null;
    @Input() id: string = this._uniqueId;
    @Input('aria-label') ariaLabel = '';
    @Input('aria-labelledby') ariaLabelledby: string | null = null;
    @ViewChild('input') public _inputElement: ElementRef;
    @ViewChild('checkboxLabel') public _labelElement: ElementRef;
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

    public _onTouched: () => any = () => {};
    private _controlValueAccessorChangeFn: (value: any) => void = () => {};

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

        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    }

    public _getAriaChecked(): 'true' | 'false' {
        return this.checked ? 'true' : 'false';
    }

    public _onInputChange(e: Event): void {
        event.stopPropagation();
    }

    public _onLabelTextChange() {
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

    // Implemented as part of ControlValueAccessor.
    public writeValue(value: any): void {
        this.checked = !!value;
    }

    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn: (value: any) => void): void {
        this._controlValueAccessorChangeFn = fn;
    }

    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    // Implemented as part of ControlValueAccessor.
    public setDisabledState(isDisabled: boolean) {
        this.disabled = coerceBooleanProperty(isDisabled);
    }

    public _onInputClick(e: Event): void {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
    }
}
