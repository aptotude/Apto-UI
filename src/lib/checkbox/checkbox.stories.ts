import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCheckboxComponentModule } from './checkbox.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/properties.md';

storiesOf('Toggles', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCheckboxComponentModule ]
        })
    )
    .add('Checkbox', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <apto-checkbox></apto-checkbox>
            <br>
            <apto-checkbox>With Label</apto-checkbox>
            <br>
            <apto-checkbox [disabled]="true">Disabled</apto-checkbox>
            <br>
            <apto-checkbox [checked]="true">Checked</apto-checkbox>
        `
    })))
;
