import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCheckboxComponentModule } from './checkbox.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/properties.md';
import { action } from '@storybook/addon-actions';

storiesOf('Checkbox', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCheckboxComponentModule ]
        })
    )
    .add('Checkbox', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <h4>Normal</h4>
            <apto-checkbox></apto-checkbox>
            <h4>Label Checkbox</h4>
            <apto-checkbox>With Label</apto-checkbox>
            <h4>Name and Value attributes</h4>
            <apto-checkbox name="foo" value="bar">With Name and Value</apto-checkbox>
            <h4>Disabled Checkbox</h4>
            <apto-checkbox [disabled]="true">Disabled</apto-checkbox>
            <h4>Checked Checkbox</h4>
            <apto-checkbox [checked]="true">Checked</apto-checkbox>
            <h4>Required Checkbox</h4>
            <apto-checkbox [required]="true">Required</apto-checkbox>
            <h4>Aria Label Checkbox</h4>
            <apto-checkbox aria-label="foo"></apto-checkbox> (aria label)
            <h4>Tab Index Checkbox</h4>
            <apto-checkbox tabIndex="5">Tab Index</apto-checkbox>
            <h4>Change Event Checkbox</h4>
            <apto-checkbox (change)="checkboxChanged($event)">Change Events</apto-checkbox>
            <h4>Block Checkbox</h4>
            <apto-checkbox block>Tab Index</apto-checkbox>
            <apto-checkbox block>Tab Index</apto-checkbox>
        `,
        props: {
            checkboxChanged: action()
        }
    })))
;
