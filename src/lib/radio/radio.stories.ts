import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoRadioComponentModule } from './radio.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/properties.md';
import { action } from '@storybook/addon-actions';

storiesOf('Radio', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoRadioComponentModule ]
        })
    )
    .add('Radio Buttons', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <apto-radio-button></apto-radio-button>
            <br><br>
            <apto-radio-button>With Label</apto-radio-button>
            <br><br>
            <apto-radio-button name="foo" value="bar">With Name and Value</apto-radio-button>
            <br><br>
            <apto-radio-button [disabled]="true">Disabled</apto-radio-button>
            <br><br>
            <apto-radio-button [checked]="true">Checked</apto-radio-button>
            <br><br>
            <apto-radio-button [required]="true">Required</apto-radio-button>
            <br><br>
            <apto-radio-button aria-labelledby="foo"></apto-radio-button> (aria labeled by)
            <br><br>
            <apto-radio-button tabIndex="5">Tab Index</apto-radio-button>
            <br><br>
            <apto-radio-button name="day" value="monday" (change)="radioChanged($event)">Monday</apto-radio-button>
            <apto-radio-button name="day" [checked]="true" value="tuesday" (change)="radioChanged($event)">Tuesday</apto-radio-button>
            <apto-radio-button name="day" value="wednesday" (change)="radioChanged($event)">Wednesday</apto-radio-button>
        `,
        props: {
            radioChanged: action()
        }
    })))
    .add('Radio Group', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <h3>Radio Group with block radio buttons</h3>
            <apto-radio-group (change)="groupChanged($event)">
                <apto-radio-button tabIndex="0" block name="day" value="monday">Monday</apto-radio-button>
                <apto-radio-button tabIndex="0" block name="day" [checked]="true" value="tuesday">Tuesday</apto-radio-button>
                <apto-radio-button tabIndex="0" block name="day" value="wednesday">Wednesday</apto-radio-button>
            </apto-radio-group>
        `,
        props: {
            groupChanged: action()
        }
    })))


;
