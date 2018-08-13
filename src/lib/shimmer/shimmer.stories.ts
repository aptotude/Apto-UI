import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoShimmerComponentModule } from './shimmer.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as shimmerMd from './docs/shimmer.md';
import { AptoGridComponentModule } from '../grid';

storiesOf('Loader', module)
    .addDecorator(
        moduleMetadata({
            imports: [AptoShimmerComponentModule, AptoGridComponentModule]
        })
    )
    .add('Shimmer', withMarkdownNotes(shimmerMd)(() => ({
        template: `
            <apto-container>
                <apto-row>
                    <apto-col><apto-shimmer></apto-shimmer></apto-col>
                    <apto-col><apto-shimmer></apto-shimmer></apto-col>
                </apto-row>
                <apto-row style="margin-top:1rem">
                    <apto-col><apto-shimmer></apto-shimmer></apto-col>
                    <apto-col><apto-shimmer></apto-shimmer></apto-col>
                </apto-row>
            </apto-container>
        `
    })))
;
