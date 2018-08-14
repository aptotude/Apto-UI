import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoIconComponentModule } from './icon.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/paragraph.md';
import { AptoIconRegistry } from './icon-registry';
import { AptoGridComponentModule } from '../grid';

storiesOf('Icons', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoIconComponentModule, AptoGridComponentModule ],
            providers: [ AptoIconRegistry ]
        })
    )
    .add('Icon Set', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <style>
                apto-col{margin-bottom: 1rem; text-align: center;}
                .icon-meta{ border-top: 1px solid #ccc; }
            </style>
            <apto-container>
                <apto-row>
                    <apto-col sm="2"><apto-icon icon="property"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="company"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon aria-label="Email" icon="email"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="check"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="phone"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="folder"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="edit"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="help"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="callList"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="close"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="person"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="people"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="left"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="right"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="up"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="down"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="download"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="search"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="dropDown"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="dropUp"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="thumbUp"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="time"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="task"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="money"></apto-icon></apto-col>
                    <apto-col sm="2"><apto-icon icon="list"></apto-icon></apto-col>
                </apto-row>
                <h3>Sizing</h3>
                <apto-row>
                    <apto-col><apto-icon size="xs" icon="property"></apto-icon><div class="icon-meta">xs</div></apto-col>
                    <apto-col><apto-icon size="sm" icon="property"></apto-icon><div class="icon-meta">sm</div></apto-col>
                    <apto-col><apto-icon icon="property"></apto-icon><div class="icon-meta">default</div></apto-col>
                    <apto-col><apto-icon size="md" icon="property"></apto-icon><div class="icon-meta">md</div></apto-col>
                    <apto-col><apto-icon size="lg" icon="property"></apto-icon><div class="icon-meta">lg</div></apto-col>
                    <apto-col><apto-icon size="xl" icon="property"></apto-icon><div class="icon-meta">xl</div></apto-col>
                </apto-row>
            </apto-container>
        `
    })))
;
