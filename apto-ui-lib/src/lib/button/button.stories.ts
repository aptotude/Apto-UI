import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonKinds, ButtonTypes } from './button.component';
import { AptoButtonComponentModule } from './button.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as primaryButtonMd from './docs/primary-button.md';
import * as primaryLinkButtonMd from './docs/link-primary-button.md';
import * as secondaryLinkButtonMd from './docs/link-secondary-button.md';
import * as dangerLinkButtonMd from './docs/link-danger-button.md';
import * as secondaryDarkLinkButtonMd from './docs/link-secondary-dark-button.md';
import * as buttonPropsMd from './docs/properties.md';
import * as holdButtonMd from './docs/hold.md';
import { action } from '@storybook/addon-actions';

storiesOf('Buttons/Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Primary', withMarkdownNotes(`${primaryButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button>Button</apto-button>
            <br><br>
            <apto-button
                disabled>Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo">Button with data-automation="foo"</apto-button>
        `
    })))
;
storiesOf('Buttons/Link', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Primary', withMarkdownNotes(`${primaryLinkButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button
                kind="${ButtonKinds.Primary}"
                type="${ButtonTypes.Link}">Button</apto-button>
            <br><br>
            <apto-button
                disabled
                kind="${ButtonKinds.Primary}"
                type="${ButtonTypes.Link}">Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo"
                kind="${ButtonKinds.Primary}"
                type="${ButtonTypes.Link}">Button with data-automation="foo"</apto-button>
            `
    })))
    .add('Secondary', withMarkdownNotes(`${secondaryLinkButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button kind="${ButtonKinds.Secondary}" type="${ButtonTypes.Link}">Button</apto-button>
            <br><br>
            <apto-button
                disabled
                kind="${ButtonKinds.Secondary}"
                type="${ButtonTypes.Link}">Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo"
                kind="${ButtonKinds.Secondary}"
                type="${ButtonTypes.Link}">Button  with data-automation="foo"</apto-button>
        `
    })))
    .add('Secondary Dark', withMarkdownNotes(`${secondaryDarkLinkButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button kind="${ButtonKinds.SecondaryDark}" type="${ButtonTypes.Link}">Button</apto-button>
            <br><br>
            <apto-button
                disabled
                kind="${ButtonKinds.SecondaryDark}"
                type="${ButtonTypes.Link}">Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo"
                kind="${ButtonKinds.SecondaryDark}"
                type="${ButtonTypes.Link}">Button  with data-automation="foo"</apto-button>
        `
    })))
    .add('Danger', withMarkdownNotes(`${dangerLinkButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button kind="${ButtonKinds.Danger}" type="${ButtonTypes.Link}">Button</apto-button>
            <br><br>
            <apto-button
                disabled
                kind="${ButtonKinds.Danger}"
                type="${ButtonTypes.Link}">Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo"
                kind="${ButtonKinds.Danger}"
                type="${ButtonTypes.Link}">Button  with data-automation="foo"</apto-button>
        `
    })))
;
storiesOf('Buttons/Hold', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Hold', withMarkdownNotes(`${holdButtonMd}${buttonPropsMd}`)(() => ({
        template: `
            <apto-button
                (hold)="holdEvent($event)"
                holdButton
                kind="${ButtonKinds.Danger}"
                type="${ButtonTypes.Link}">Hold To Delete</apto-button>
            <br><br>
            <apto-button
                disabled
                (hold)="holdEvent($event)"
                holdButton
                kind="${ButtonKinds.Danger}"
                type="${ButtonTypes.Link}">Disabled Hold To Delete</apto-button>
            `,
        props: {
            holdEvent: action()
        }
    })))
;
