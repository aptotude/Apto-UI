```
<apto-card>
    <apto-card-header noBottomPadding>Header</apto-card-header>
    <apto-card-content noPadding>
        <apto-list>
            <apto-list-item link>
                <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                First Thing Icon With Link
            </apto-list-item>
            <apto-list-item link>
                <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                Second Thing Icon With Link
            </apto-list-item>
            <apto-list-item link>
                <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                Third Thing Icon With Link
            </apto-list-item>
        </apto-list>
    </apto-card-content>
</apto-card>
```

To turn a list item into a link add the `link` attribute to the `<apto-list-item>`. This add a hand cursor, hover state, and a chevron to the right. To add an icon to the list use a normal `<apto-icon>` and add the `aptoListItemIcon` attribute to it.