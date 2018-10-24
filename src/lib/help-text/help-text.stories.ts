import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoHelpTextComponentModule } from './help-text.module';
import { withMarkdownNotes } from '@storybook/addon-notes';

import * as propertiesMd from './docs/properties.md';

storiesOf('Help Text', module)
    .addDecorator(
        moduleMetadata({
            imports: [AptoHelpTextComponentModule]
        })
    )
    .add('Basic Usage',  withMarkdownNotes(`${propertiesMd}`)(() => ({
        template: `
            <apto-help-text>
                This is help
            </apto-help-text>
            <br><br>
            <apto-help-text [error]="true">
                This is help with error
            </apto-help-text>
            <br><br>
            <p>
                this is some stuff
                <apto-help-text inline>
                    This is inline help
                </apto-help-text>
            </p>
        `
    })))
;
