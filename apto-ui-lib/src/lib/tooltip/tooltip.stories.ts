import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoTooltipComponentModule } from './tooltip.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as tooltipMd from './docs/tooltip.md';

storiesOf('Tooltip', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoTooltipComponentModule ]
        })
    )
    .add('Tooltip', withMarkdownNotes(tooltipMd)(() => ({
        template: `
        <style>
            apto-tooltip-trigger {
                border: 1px solid #333;
                background: #eee;
                padding: 0.25rem;
                display: inline-block;
            }
        </style>
        <apto-tooltip>
            <apto-tooltip-trigger>Tooltip Trigger</apto-tooltip-trigger>
            <apto-tooltip-content><strong>Content</strong></apto-tooltip-content>
        </apto-tooltip>
        <br><br>
        <apto-tooltip hoverDelay="1000">
            <apto-tooltip-trigger>Tooltip with hover delay</apto-tooltip-trigger>
            <apto-tooltip-content>Content</apto-tooltip-content>
        </apto-tooltip>
        `
    })))
;
