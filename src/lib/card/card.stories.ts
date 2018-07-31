import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button/button.module';

storiesOf('Card', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoCardComponentModule, AptoButtonComponentModule ]
        })
    )
    .add('Card', () => ({
        template: `
        <apto-card>
            <apto-card-header>I Am Header</apto-card-header>
            I Am Content
            <apto-card-footer>
                <apto-button kind="primary" type="link">I Am Footer</apto-button>
            </apto-card-footer>
        </apto-card>`
    }))
    .add('Card Empty', () => ({
        template: `
        <apto-card>
            I Am Content
        </apto-card>`
    }))
    .add('Card Only Header', () => ({
        template: `
        <apto-card>
            <apto-card-header>I Am Header</apto-card-header>
            I Am Content
        </apto-card>`
    }))
    .add('Card Only Footer', () => ({
        template: `
        <apto-card>
            <apto-card-footer>
                <apto-button kind="primary" type="link">I Am Footer</apto-button>
            </apto-card-footer>
            I Am Content
        </apto-card>`
    }))
    .add('Card Footer Left', () => ({
        template: `
        <apto-card>
            <apto-card-header>I Am Header</apto-card-header>
            I Am Content
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">FOOTER LEFT</apto-button>
                </apto-card-footer-left>
            </apto-card-footer>
        </apto-card>`
    }))
    .add('Card Footer Right', () => ({
        template: `
        <apto-card>
            <apto-card-header>I Am Header</apto-card-header>
            I Am Content
            <apto-card-footer>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">FOOTER RIGHT</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>`
    }))
    .add('Card Footer Both', () => ({
        template: `
        <apto-card>
            <apto-card-header>I Am Header</apto-card-header>
            I Am Content
            <apto-card-footer>
                <apto-card-footer-left>
                    <apto-button kind="primary" type="link">FOOTER LEFT</apto-button>
                </apto-card-footer-left>
                <apto-card-footer-right>
                    <apto-button kind="primary" type="link">FOOTER RIGHT</apto-button>
                </apto-card-footer-right>
            </apto-card-footer>
        </apto-card>`
    }))
    .add('Card With Automation Selector', () => ({
        template: `
        <apto-card automationSelector="foo">
            I Am Content
        </apto-card>`
    }))
;
