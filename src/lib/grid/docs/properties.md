## Apto Container Properties `<apto-container>`
Name | Description
---- | -----------
@Input() fixed: boolean = false | If true creates a fixed width container. If false the container is 100% wide.
@Input() scroll: boolean = false | If true the container has a height of 100% and overflow auto allowing content to scroll based on parent's height.

## Apto Row Properties `<apto-row>`
Name | Description
---- | -----------
@Input() gutter: boolean = true | If false padding is removed from columns and rows

## Apto Column Properties `<apto-col>`
Name | Description
---- | -----------
@Input() xs: number/string/boolean | Use for all breakpoints. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() sm: number/string/boolean | Use for small and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() md: number/string/boolean | Use for medium and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() lg: number/string/boolean | Use for large and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
@Input() xl: number/string/boolean | Use for xlarge and up. Use a number from 1 to 12 or pass in "true" for equal widths or "auto" for auto size.
