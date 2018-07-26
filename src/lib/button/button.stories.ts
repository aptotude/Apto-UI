import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoButtonComponent, ButtonKinds, ButtonTypes } from './button.component';
import { AptoButtonComponentModule } from './button.module';

storiesOf('Buttons/Button/Primary', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Active', () => ({
        template: `<apto-button>Next</apto-button>`
    }))
    .add('Disabled', () => ({
        template: `<apto-button [disabled]="true">Next</apto-button>`
    }))
;
storiesOf('Buttons/Link/Primary', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Active', () => ({
        template: `<apto-button kind="${ButtonKinds.Primary}" type="${ButtonTypes.Link}">Next</apto-button>`
    }))
    .add('Disabled', () => ({
        template: `<apto-button [disabled]="true" kind="${ButtonKinds.Primary}" type="${ButtonTypes.Link}">Next</apto-button>`
    }))
;

storiesOf('Buttons/Link/Secondary', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoButtonComponentModule ]
        })
    )
    .add('Active', () => ({
        template: `<apto-button kind="${ButtonKinds.Secondary}" type="${ButtonTypes.Link}">Next</apto-button>`
    }))
    .add('Disabled', () => ({
        template: `<apto-button [disabled]="true" kind="${ButtonKinds.Secondary}" type="${ButtonTypes.Link}">Next</apto-button>`
    }))
;
