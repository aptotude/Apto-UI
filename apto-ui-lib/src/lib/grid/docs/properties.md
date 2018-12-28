## Apto Container Directives `<apto-container>`
Name | Description
---- | -----------
fixed | If set on container, the container will used a fixed width container.
scroll | If set on the container, the content will scroll within the parent element.

## Apto Row Directives `<apto-row>`
Name | Description
---- | -----------
noGutter | If added to element, padding is removed from columns and rows

## Apto Column Directives `<apto-col>`
Name | Description
---- | -----------
@Input() xs: number/string/boolean | Use for all breakpoints. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() sm: number/string/boolean | Use for small and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() md: number/string/boolean | Use for medium and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() lg: number/string/boolean | Use for large and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() xl: number/string/boolean | Use for xlarge and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
