import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button/button.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as cardMd from './docs/card.md';
import * as cardHeader from './docs/cardHeader.md';
import * as cardFooter from './docs/cardFooter.md';

const styles = `
<style>
    .content-paddding-left {
        padding-left: 1.6rem;
    }
    .content-padding-top-bottom {
        padding: .8rem 0 .8rem 1.6rem;
    }
    .content-padding-bottom {
        padding: 0 0 .8rem 1.6rem;
    }
</style>
`;


storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCardComponentModule, AptoButtonComponentModule ]
        })
    )
    .add('Basic Usage',  withMarkdownNotes(cardMd)(() => ({
        template: `
        ${styles}
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card content</div>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>

        <apto-card automation="foo">
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card with automation tag "foo"</div>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
    </apto-card>
        `
    })))
    .add('Card Header & Content', withMarkdownNotes(cardHeader)(() => ({
        template: `
        ${styles}
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-padding-bottom">Apto card header + content</div>
        </apto-card>

        <apto-card>
            <div class="content-padding-top-bottom">Apto card empty card - content only</div>
        </apto-card>`
    })))
    .add('Card Footer', withMarkdownNotes(cardFooter)(() => ({
        template: `
        ${styles}
        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card + footer</div>
            <apto-card-footer>
                <apto-button kind="primary" type="link">Footer</apto-button>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card + footer right</div>
            <apto-card-footer>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">Footer right</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card + footer left</div>
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">Footer left</apto-button>
                </apto-card-footer-left>
            </apto-card-footer>
        </apto-card>

        <apto-card>
            <apto-card-header>Header</apto-card-header>
            <div class="content-paddding-left">Apto card + right and left footer</div>
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
