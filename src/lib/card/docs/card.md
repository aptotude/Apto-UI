#### Apto Card

```
<apto-card>
    <apto-card-header>Header</apto-card-header>
    Apto card content
    <apto-card-footer>
        <apto-button kind="primary" type="link">Footer</apto-button>
    </apto-card-footer>
</apto-card>
```

#### Apto Card With Automation Selector

```
<apto-card automation="foo">
    <apto-card-header>Header</apto-card-header>
    Apto card with automation tag "foo"
    <apto-card-footer>
        <apto-button kind="primary" type="link">Footer</apto-button>
    </apto-card-footer>
</apto-card>
```

## Apto Card Properties `<apto-card>`
Name | Description
---- | -----------
@Input() automation: string | Use to add an automation attribute with a custom classname
