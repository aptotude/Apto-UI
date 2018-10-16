### Normal Help
```
    <apto-help-text>
        This is help
    </apto-help-text>
```

### Error Help
```
    <apto-help-text [error]="true">
        This is help with error
    </apto-help-text>
```

### Error Inlnine
```
<p>
    this is some stuff
    <apto-help-text inline>
        This is inline help
    </apto-help-text>
</p>
```
## Apto Help Text Properties `<apto-help-text>`
Name | Description
---- | -----------
@Input() error: boolean = false | Adding the `error` with a value of true turns the text red
@Input() inline: boolean = false | Adding the `inline` will make the help text display inline-block
