```
<apto-tab-group>
    <apto-tab label="One">This is content tab 1</apto-tab>
    <apto-tab label="Two">This is content tab 2</apto-tab>
    <apto-tab label="Three">This is content tab 3</apto-tab>
</apto-tab-group>
```

#### Use with tab card to format content
```
<apto-tab-group>
    <apto-tab label="One">
        <apto-card>
            <apto-card-header>One</apto-card-header>
            <apto-card-content>
                This is content tab 1
            </apto-card-content>
        </apto-card>
    </apto-tab>
    <apto-tab label="Two">
        <apto-card>
            <apto-card-header>Two</apto-card-header>
            <apto-card-content>
                This is content tab 2
            </apto-card-content>
        </apto-card>
    </apto-tab>
    <apto-tab label="Three">
        <apto-card>
            <apto-card-header>Three</apto-card-header>
            <apto-card-content>
                This is content tab 3
            </apto-card-content>
        </apto-card>
    </apto-tab>
</apto-tab-group>
```

#### Using Automation Attribute
```
<apto-tab-group>
    <apto-tab automation="foo-1" label="One">This is content tab 1</apto-tab>
    <apto-tab automation="foo-2" label="Two">This is content tab 2</apto-tab>
    <apto-tab automation="foo-3" label="Three">This is content tab 3</apto-tab>
</apto-tab-group>
```
The automation atturbute adds a `data-automation="..."` attribute to both the `apto-tabs-nav-item` and `apto-tabs-pane`.
This allows you to select a tab trigger with something like `document.querySelectory('.apto-tabs-nav-item[data-automation="foo-1"]')` and the tab conent with something like `document.querySelectory('.apto-tabs-pane[data-automation="foo-1"]')`.
