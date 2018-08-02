import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoGridComponentModule } from './grid.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as basicUsageMd from './docs/basic-usage.md';
import * as oneColumnWidthMd from './docs/one-column-width.md';
import * as variableWidthMd from './docs/variable-column-width.md';
import * as allBreakpointsMd from './docs/all-breakpoints.md';
import * as stackingMd from './docs/stacking.md';
import * as mixMatchMd from './docs/mix-match.md';
import * as noGutterMd from './docs/no-gutter.md';

const styles = `
<style>
    apto-col {
        padding-top: .75rem;
        padding-bottom: .75rem;
        background-color: rgba(86,61,124,.15);
        border: 1px solid rgba(86,61,124,.2);
    }
</style>
`;

storiesOf('Grid', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoGridComponentModule ],
        })
    )
    .add('Basic Usage', withMarkdownNotes(basicUsageMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col>1 of 3</apto-col>
                <apto-col>2 of 3</apto-col>
                <apto-col>3 of 3</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('One Column Width', withMarkdownNotes(oneColumnWidthMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col>1 of 3</apto-col>
                <apto-col xs="6">2 of 3 (wider) (xs="6")</apto-col>
                <apto-col>3 of 3</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Variable Width Content', withMarkdownNotes(variableWidthMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col>1 of 3</apto-col>
                <apto-col md="auto">Variable width content (md="auto")</apto-col>
                <apto-col>3 of 3</apto-col>
            </apto-row>
        </apto-container>
    `
    })))
    .add('All Breakpoints', withMarkdownNotes(allBreakpointsMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col>col</apto-col>
                <apto-col>col</apto-col>
                <apto-col>col</apto-col>
            </apto-row>
            <apto-row>
                <apto-col xs="8">xs="8"</apto-col>
                <apto-col xs="4">xs="4"</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Stacked To Horizontal', withMarkdownNotes(stackingMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col sm="true">sm="true"</apto-col>
                <apto-col sm="true">sm="true"</apto-col>
                <apto-col sm="true">sm="true"</apto-col>
            </apto-row>
            <apto-row>
                <apto-col sm="8">sm="8"</apto-col>
                <apto-col sm="4">sm="4"</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Mix And Match', withMarkdownNotes(mixMatchMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row>
                <apto-col xs="12" md="8">xs="12" md="8"</apto-col>
                <apto-col xs="6" md="4">xs="6" md="4"</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('No Gutters', withMarkdownNotes(noGutterMd)(() => ({
        template: `
        ${styles}
        <apto-container>
            <apto-row [gutter]="false">
                <apto-col>1 of 3</apto-col>
                <apto-col>2 of 3</apto-col>
                <apto-col>3 of 3</apto-col>
            </apto-row>
        </apto-container>
        `
    })))
;
