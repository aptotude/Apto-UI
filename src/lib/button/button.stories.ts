import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonKinds, ButtonTypes } from './button.component';
import { AptoButtonComponentModule } from './button.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as primaryButtonMd from './docs/primary-button.md';
import * as primaryLinkButtonMd from './docs/link-primary-button.md';
import * as secondaryLinkButtonMd from './docs/link-secondary-button.md';
import * as buttonPropsMd from './docs/properties.md';

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
                [disabled]="true">Disabled Button</apto-button>
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
                [disabled]="true"
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
                [disabled]="true"
                kind="${ButtonKinds.Secondary}"
                type="${ButtonTypes.Link}">Disabled Button</apto-button>
            <br><br>
            <apto-button
                automation="foo"
                kind="${ButtonKinds.Secondary}"
                type="${ButtonTypes.Link}">Button  with data-automation="foo"</apto-button>
        `
    })))
;
