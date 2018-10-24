### no label
```
<apto-checkbox></apto-checkbox>
```

### with label
```
<apto-checkbox>With Label</apto-checkbox>
```

### with name and value
```
<apto-checkbox name="foo" value="bar">With Label</apto-checkbox>
```

### disabled state
```
<apto-checkbox [disabled]="true">Disabled</apto-checkbox>
```

### check state
```
<apto-checkbox [checked]="true">Checked</apto-checkbox>
```

### required
```
<apto-checkbox [required]="true">Required</apto-checkbox>
```

### aria
```
<apto-checkbox aria-label="foo"></apto-checkbox>
<apto-checkbox aria-labelledby="bar"></apto-checkbox>
```

### tab index
```
<apto-checkbox tabIndex="5">Tab Index</apto-checkbox>
```

### change event
```
<apto-checkbox (change)="someFunction($event)"></apto-checkbox>
```

### ngModel
```
<apto-checkbox name="foo" [(ngModel)]="isGood">Be good</apto-checkbox>
```

### formControl
```
<apto-checkbox [formControl]="formControl"></apto-checkbox>
```

## Use with @angular/forms
`<apto-checkbox>` is compatible with `@angular/forms` and supports both `FormsModule` and `ReactiveFormsModule`.

## Accessibility
The `<apto-checkbox>` uses an internal `<input type="checkbox">` to provide an accessible experience. This internal checkbox receives focus and is automatically labelled by the text content of the `<apto-checkbox>` element.

Checkboxes without text or labels should be given a meaningful label via `aria-label` or `aria-labelledby`.


## Apto Checkbox Directives `<apto-checkbox>`
Name | Description
---- | -----------
@Input() name: string | Name of input
@Input() value: string | Value of input
@Input() id: string | Id of input
@Input() aria-label: string | Aria label for input
@Input() aria-labelledby: string | Aria labelled by for input
@Input() tabIndex: number | Tab index for input
@Input() checked: boolean | If input is checked or not
@Input() disabled: boolean | If input is disabled or not
@Input() required: boolean | If input is required or not
@ViewChild() _inputElement: ElementRef | The input element in the component
@Output() change: AptoCheckboxChange | The change event you can listen to

## Methods
```
focus
Focuses the checkbox.
```

```
toggle
Toggles the checked state of the checkbox.
```

### AptoCheckboxRequiredValidator
Validator for Apto checkbox's required attribute in template-driven checkbox. Current CheckboxRequiredValidator only work with input type=checkbox and does not work with apto-checkbox.

Selector: apto-checkbox[required][formControlName] apto-checkbox[required][formControl] apto-checkbox[required][ngModel]

## Classes

### AptoCheckboxChange
Change event object emitted by AptoCheckboxChange.

#### Properties
Name | Description
---- | -----------
checked: boolean | The new checked value of the checkbox.
