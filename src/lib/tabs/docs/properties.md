## Apto Tab Directives `<apto-tab-group>`
Name | Description
---- | -----------
@Input() selectedIndex: number = 0 | Set this to be the tab you want opened.

## Apto Tab Events `<apto-tab-group>`
Name | Description
---- | -----------
@Output() selectedTabChange: AptoTabChangeEvent | Fires when a tab is opened. The event contains the `index` and `tab`