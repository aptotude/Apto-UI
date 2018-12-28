## Apto Button Properties `<apto-button>`
Name | Description
---- | -----------
@Input() kind: ButtonKinds = 'primary' | The kind of button to build either `primary` or `secondary`, `secondaryDark`, `danger`.
@Input() type: ButtonTypes = 'button' | The type of button to build either `button` or `link`.
@Input() disabled: boolean = false | If true the button will be disabled.
@Input() title: string = '' | The title attribute for the button.
@Input() automation: string = null | Sets the data-automation attribute on the button.

## Apto `holdButton` Directive `<apto-button holdButton>`
Name | Description
---- | -----------
@Output() hold | Event emittied if button is held when using the `holdButton` directive
