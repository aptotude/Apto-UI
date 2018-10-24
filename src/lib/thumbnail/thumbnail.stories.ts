import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoThumbnailComponentModule } from './thumbnail.module';
import { withMarkdownNotes } from '@storybook/addon-notes';

import * as propertiesMd from './docs/properties.md';

storiesOf('Thumbnail', module)
    .addDecorator(
        moduleMetadata({
            imports: [AptoThumbnailComponentModule]
        })
    )
    .add('Basic Usage',  withMarkdownNotes(`${propertiesMd}`)(() => ({
        template: `
            <apto-thumbnail>
                <img src="https://broker.apto.com/images/Boston.jpg">
            </apto-thumbnail>
        `
    })))
;
