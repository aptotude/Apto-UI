import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button/button.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as cardMd from './docs/card.md';
import * as cardHeader from './docs/cardHeader.md';
import * as cardFooter from './docs/cardFooter.md';
import * as cardPropertiesMd from './docs/properties.md';

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCardComponentModule, AptoButtonComponentModule ]
        })
    )
    .add('Basic Usage',  withMarkdownNotes(`${cardMd}${cardPropertiesMd}`)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card content</apto-card-content>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content noPadding>Apto card with no content padding</apto-card-content>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>
        `
    })))
    .add('Card Header & Content', withMarkdownNotes(`${cardHeader}${cardPropertiesMd}`)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card header + content</apto-card-content>
        </apto-card>

        <apto-card>
            <apto-card-content>Apto card empty card - content only</apto-card-content>
        </apto-card>`
    })))
    .add('Card Footer', withMarkdownNotes(`${cardFooter}${cardPropertiesMd}`)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card + footer</apto-card-content>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card + footer right</apto-card-content>
            <apto-card-footer>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">Footer right</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card + footer left</apto-card-content>
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">Footer left</apto-button>
                </apto-card-footer-left>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <apto-card-content>Apto card + right and left footer</apto-card-content>
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">Footer left</apto-button>
                </apto-card-footer-left>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">Footer Right</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>`
    })));
