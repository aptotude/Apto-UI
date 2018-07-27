import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoTooltipComponentModule } from './tooltip.module';

storiesOf('Tooltip', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoTooltipComponentModule ]
        })
    )
    .add('Tooltip', () => ({
        template: `<apto-tooltip>
                <apto-tooltip-trigger>i am the trigger</apto-tooltip-trigger>
                <apto-tooltip-content>i am the content</apto-tooltip-content>
            </apto-tooltip>`
    }))
;
