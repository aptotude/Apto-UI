import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoHeaderComponentModule } from './header.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as headersMd from './docs/headers.md';

storiesOf('Header', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoHeaderComponentModule ]
        })
    )
    .add('Basic Usage', withMarkdownNotes(headersMd)(() => ({
        template: `
            <apto-header type="1">Heading H1</apto-header>
            <apto-header type="2">Heading H2</apto-header>
            <apto-header type="3">Heading H3</apto-header>
            <apto-header type="4">Heading H4</apto-header>
            <apto-header type="5">Heading H5</apto-header>
            <apto-header type="6">Heading H6</apto-header>
        `
    })))
;
