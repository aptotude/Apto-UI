import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoTabsComponentModule } from './tabs.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { AptoCardComponentModule } from '../card';
import * as propertiesMd from './docs/properties.md';
import * as defaultMd from './docs/default.md';
import * as customLabelMd from './docs/custom-label.md';
import * as setIndexMd from './docs/set-index.md';
import * as eventMd from './docs/event.md';

storiesOf('Tabs', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoTabsComponentModule, AptoCardComponentModule ]
        })
    )
    .add('Default', withMarkdownNotes(`${defaultMd}${propertiesMd}`)(() => ({
        template: `
            <apto-tab-group>
                <apto-tab label="One">This is content tab 1</apto-tab>
                <apto-tab label="Two">This is content tab 2</apto-tab>
                <apto-tab label="Three">This is content tab 3</apto-tab>
            </apto-tab-group>
            <br><br>
            <h3>Using apto-card for formating content</h3>
            <apto-tab-group>
                <apto-tab label="One">
                    <apto-card>
                        <apto-card-header>One</apto-card-header>
                        <apto-card-content>
                            This is content tab 1
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
                <apto-tab label="Two">
                    <apto-card>
                        <apto-card-header>Two</apto-card-header>
                        <apto-card-content>
                            This is content tab 2
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
                <apto-tab label="Three">
                    <apto-card>
                        <apto-card-header>Three</apto-card-header>
                        <apto-card-content>
                            This is content tab 3
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
            </apto-tab-group>
            <br><br>
            <h3>Using Automation Attribute</h3>
            <apto-tab-group>
                <apto-tab automation="foo-1" label="One">This is content tab 1</apto-tab>
                <apto-tab automation="foo-2" label="Two">This is content tab 2</apto-tab>
                <apto-tab automation="foo-3" label="Three">This is content tab 3</apto-tab>
            </apto-tab-group>
        `
    })))
    .add('Custom Labels', withMarkdownNotes(`${customLabelMd}${propertiesMd}`)(() => ({
        template: `
            <apto-tab-group>
                <apto-tab>
                    <ng-template aptoTabLabel>
                        <em>One</em>
                    </ng-template>
                    <apto-card>
                        <apto-card-header>One</apto-card-header>
                        <apto-card-content>This is content tab 1</apto-card-content>
                    </apto-card>
                </apto-tab>
                <apto-tab>
                    <ng-template aptoTabLabel>
                        <em>Two</em>
                    </ng-template>
                    <apto-card>
                        <apto-card-header>Two</apto-card-header>
                        <apto-card-content>This is content tab 2</apto-card-content>
                    </apto-card>
                </apto-tab>
            </apto-tab-group>
        `
    })))

    .add('Set Tab ', withMarkdownNotes(`${setIndexMd}${propertiesMd}`)(() => ({
        template: `
            <apto-tab-group [selectedIndex]="1">
                <apto-tab label="One">
                    <apto-card>
                        <apto-card-header>One</apto-card-header>
                        <apto-card-content>
                            This is content tab 1
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
                <apto-tab label="Two">
                    <apto-card>
                        <apto-card-header>Two</apto-card-header>
                        <apto-card-content>
                            This is content tab 2
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
                <apto-tab label="Three">
                    <apto-card>
                        <apto-card-header>Three</apto-card-header>
                        <apto-card-content>
                            This is content tab 3
                        </apto-card-content>
                    </apto-card>
                </apto-tab>
            </apto-tab-group>
        `
    })))
    .add('Events', withMarkdownNotes(`${eventMd}${propertiesMd}`)(() => ({
        template: `
            <apto-tab-group (selectedTabChange)="tabChanged($event)">
                <apto-tab label="One">This is content tab 1</apto-tab>
                <apto-tab label="Two">This is content tab 2</apto-tab>
                <apto-tab label="Three">This is content tab 3</apto-tab>
            </apto-tab-group>
        `,
        props: {
            tabChanged: action()
        }
    })))
;
