import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoLoaderComponentModule } from './loader.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as loaderMd from './docs/loader.md';

storiesOf('Loader', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoLoaderComponentModule ]
        })
    )
    .add('Default', withMarkdownNotes(loaderMd)(() => ({
        template: `
            <div style="background: #efefef; position:relative; max-width: 400px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            <apto-loader text="Loading..."></apto-loader>
            </div>
            <br><br>
            <div style="background: #efefef; position:relative; max-width: 400px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            <apto-loader></apto-loader>
            </div>
            <br><br>
            <div style="background: #efefef; position:relative; max-width: 400px; min-height: 200px;">
            <apto-loader noOverlay text="No Overlay Loader"></apto-loader>
            </div>
        `
    })))
;
