import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button/button.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as cardMd from './docs/card.md';
import * as cardHeader from './docs/cardHeader.md';
import * as cardFooter from './docs/cardFooter.md';

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCardComponentModule, AptoButtonComponentModule ]
        })
    )
    .add('Basic Usage',  withMarkdownNotes(cardMd)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card content
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>

        <apto-card automation="foo">
            <apto-card-header>Header</apto-card-header>
            Apto card with automation tag "foo"
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
    </apto-card>
        `
    })))
    .add('Card Header & Content', withMarkdownNotes(cardHeader)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card header + content
        </apto-card>

        <apto-card>
            Apto card empty card - content only
        </apto-card>`
    })))
    .add('Card Footer', withMarkdownNotes(cardFooter)(() => ({
        template: `
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card + footer
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card + footer right
            <apto-card-footer>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">Footer right</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>
        
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card + footer left
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">Footer left</apto-button>
                </apto-card-footer-left>
            </apto-card-footer>
        </apto-card>
        
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            Apto card + right and left footer
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