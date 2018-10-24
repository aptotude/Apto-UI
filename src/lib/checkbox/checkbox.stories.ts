import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCheckboxComponentModule } from './checkbox.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/properties.md';
import { action } from '@storybook/addon-actions';

storiesOf('Toggles', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCheckboxComponentModule ]
        })
    )
    .add('Checkbox', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <apto-checkbox></apto-checkbox>
            <br><br>
            <apto-checkbox>With Label</apto-checkbox>
            <br><br>
            <apto-checkbox name="foo" value="bar">With Name and Value</apto-checkbox>
            <br><br>
            <apto-checkbox [disabled]="true">Disabled</apto-checkbox>
            <br><br>
            <apto-checkbox [checked]="true">Checked</apto-checkbox>
            <br><br>
            <apto-checkbox [required]="true">Required</apto-checkbox>
            <br><br>
            <apto-checkbox aria-label="foo"></apto-checkbox> (aria label)
            <br><br>
            <apto-checkbox tabIndex="5">Tab Index</apto-checkbox>
            <br><br>
            <apto-checkbox (change)="checkboxChanged($event)">Change Events</apto-checkbox>
        `,
        props: {
            checkboxChanged: action()
        }
    })))
;
