### Default Help Text
```
    <apto-help-text>
        This is help
    </apto-help-text>
```

### Error Help Text
```
    <apto-help-text [error]="true">
        This is help text in the error state
    </apto-help-text>
```

### Inline Help Text
```
<p>
    Text with help text inline next to it
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
