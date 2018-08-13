## Apto Tab Directives `<apto-tab-group>`
Name | Description
---- | -----------
@Input() selectedIndex: number = 0 | Set this to be the tab you want opened.

## Apto Tab Events `<apto-tab-group>`
Name | Description
---- | -----------
@Output() selectedTabChange: AptoTabChangeEvent | Fires when a tab is opened. The event contains the `index` and `tab`


## Apto Tab Directives `<apto-tab>`
Name | Description
---- | -----------
@Input() label: string = '' | The tab label. Set the label property on `<apto-tab label="foo">` or use `<apto-tab><ng-template aptoTabLabel></ng-template></apto-tab>`
@Input() automation: string = null | Adds a `data-automation="..."` attribute to both the `apto-tabs-nav-item` and `apto-tabs-pane`
