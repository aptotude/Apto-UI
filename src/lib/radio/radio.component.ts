import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Attribute,
    OnInit,
    Optional,
    Output,
    QueryList,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { coerceBooleanProperty } from '../utils';
import { HasTabIndex, mixinDisabled, CanDisable, mixinTabIndex } from '../core';

let nextUniqueId = 0;

export const APTO_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AptoRadioGroup),
    multi: true
};

export class AptoRadioChange {
    constructor(
        public source: AptoRadioButton,
        public value: any) {}
}

export class AptoRadioGroupBase { }
export const _AptoRadioGroupMixinBase = mixinDisabled(AptoRadioGroupBase);

/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
@Directive({
    selector: 'apto-radio-group',
    providers: [APTO_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
    host: {
        'role': 'radiogroup',
        'class': 'AptoRadioGroup',
    }
})
export class AptoRadioGroup extends _AptoRadioGroupMixinBase
    implements AfterContentInit, ControlValueAccessor, CanDisable {

    private _value: any = null;
    private _name: string = `AptoRadioGroup-${nextUniqueId++}`;
    private _selected: AptoRadioButton | null = null;
    private _isInitialized: boolean = false;
    private _disabled: boolean = false;
    private _required: boolean = false;
    public _controlValueAccessorChangeFn: (value: any) => void = () => {};
    public onTouched: () => any = () => {};

    @Input()
        get name(): string { return this._name; }
        set name(value: string) {
            this._name = value;
            this._updateRadioButtonNames();
        }
    @Input()
        get value(): any { return this._value; }
        set value(newValue: any) {
            if (this._value !== newValue) {
                this._value = newValue;

                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        }
    @Input()
        get selected() { return this._selected; }
        set selected(selected: AptoRadioButton | null) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        }
    @Input()
        get disabled(): boolean { return this._disabled; }
        set disabled(value) {
            this._disabled = coerceBooleanProperty(value);
            this._markRadiosForCheck();
        }
    @Input()
        get required(): boolean { return this._required; }
        set required(value: boolean) {
            this._required = coerceBooleanProperty(value);
            this._markRadiosForCheck();
        }

    @Output() readonly change: EventEmitter<AptoRadioChange> = new EventEmitter<AptoRadioChange>();

    @ContentChildren(forwardRef(() => AptoRadioButton), { descendants: true }) _radios: QueryList<AptoRadioButton>;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {
        super();
    }

    public _checkSelectedRadioButton(): void {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }

    ngAfterContentInit(): void  {
        this._isInitialized = true;
    }

    public _touch(): void {
        if (this.onTouched) {
            this.onTouched();
        }
    }

    private _updateRadioButtonNames(): void {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
            });
        }
    }

    private _updateSelectedRadioFromValue(): void {
        // If the value already matches the selected radio, do nothing.
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }

    public _emitChangeEvent(): void {
        if (this._isInitialized) {
            this.change.emit(new AptoRadioChange(this._selected!, this._value));
        }
    }

    public _markRadiosForCheck(): void  {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }

    public writeValue(value: any): void  {
        this.value = value;
        this._changeDetectorRef.markForCheck();
    }

    public registerOnChange(fn: (value: any) => void): void  {
        this._controlValueAccessorChangeFn = fn;
    }

    public registerOnTouched(fn: any): void  {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
}

export class AptoRadioButtonBase {
    disabled: boolean;
}
export const _AptoRadioButtonMixinBase = mixinTabIndex(AptoRadioButtonBase);

@Component({
    selector: 'apto-radio-button',
    templateUrl: 'radio.html',
    styleUrls: ['radio.scss'],
    host: {
        'class': 'AptoRadioButton',
        '[class.AptoRadioButton--checked]': 'checked',
        '[class.AptoRadioButton--disabled]': 'disabled',
        '[class.AptoRadioButton--block]': 'block',
        '[attr.id]': 'id',
        '(focus)': '_inputElement.nativeElement.focus()'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoRadioButton extends _AptoRadioButtonMixinBase implements OnInit, HasTabIndex {
    private _uniqueId: string = `AptoRadioButton-${++nextUniqueId}`;
    public radioGroup: AptoRadioGroup;
    private _checked: boolean = false;
    private _disabled: boolean;
    private _required: boolean;
    private _value: any = null;
    private _block = false;

    @Input() id: string = this._uniqueId;
    @Input() name: string;
    @Input('aria-label') ariaLabel: string;
    @Input('aria-labelledby') ariaLabelledby: string;
    @Input('aria-describedby') ariaDescribedby: string;
    @Input()
        get checked(): boolean { return this._checked; }
        set checked(value: boolean) {
            const newCheckedState = coerceBooleanProperty(value);
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    this.radioGroup.selected = null;
                }
                this._changeDetectorRef.markForCheck();
            }
        }
    @Input()
        get value(): any { return this._value; }
        set value(value: any) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null) {
                    if (!this.checked) {
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        }
    @Input()
        get disabled(): boolean {
            return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
        }
        set disabled(value: boolean) {
            const newDisabledState = coerceBooleanProperty(value);
            if (this._disabled !== newDisabledState) {
                this._disabled = newDisabledState;
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
        get required(): boolean {
            return this._required || (this.radioGroup && this.radioGroup.required);
        }
        set required(value: boolean) {
            this._required = coerceBooleanProperty(value);
        }

    @Output() readonly change: EventEmitter<AptoRadioChange> =
        new EventEmitter<AptoRadioChange>();

    @ViewChild('input') public _inputElement: ElementRef;

    constructor(
        @Optional() radioGroup: AptoRadioGroup,
        @Attribute('tabindex') tabIndex: string,
        private _changeDetectorRef: ChangeDetectorRef
    ) {
        super();

        this.radioGroup = radioGroup;
        this.tabIndex = parseInt(tabIndex, 10) || 0;
    }

    public get inputId(): string {
        return `${this.id || this._uniqueId}-input`;
    }

    public focus(): void {
        this._inputElement.nativeElement.focus();
    }

    public _markForCheck(): void {
        this._changeDetectorRef.markForCheck();
    }

    ngOnInit(): void {
        if (this.radioGroup) {
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    }

    private _emitChangeEvent(): void {
        this.change.emit(new AptoRadioChange(this, this._value));
    }

    public _onInputClick(event: Event): void  {
        event.stopPropagation();
    }

    public _onInputChange(event: Event): void  {
        event.stopPropagation();

        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();

        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
}
