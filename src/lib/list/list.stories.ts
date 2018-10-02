import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoListComponentModule } from './list.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as propertiesMd from './docs/properties.md';
import { AptoIconComponentModule, AptoIconRegistry } from '../icon';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AptoCardComponentModule } from '../card';

@Component({
    template: `
    <apto-card>
        <apto-card-header>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item link>
                    First Thing Link
                </apto-list-item>
                <apto-list-item>
                    Second Thing No Link
                </apto-list-item>
                <apto-list-item link>
                    <apto-icon aptoListItemIcon icon="property"></apto-icon>
                    Thing Icon And Link
                </apto-list-item>
                <apto-list-item link>
                    <apto-icon aptoListItemIcon icon="property"></apto-icon>
                    Thing 2 Icon And Link
                </apto-list-item>
                <apto-list-item>
                    <apto-icon aptoListItemIcon icon="property"></apto-icon>
                    Thing 3 Icon No Link
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>
    `
})
export class ListStoryComponent {
    constructor(iconRegistry: AptoIconRegistry, sanitizer: DomSanitizer) {
        const url = process.env.NODE_ENV === 'development' ? '' : '/apto-ui/assets';
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl(`${url}/apto-icon-sprite.svg`)
        );
    }
}

storiesOf('List', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoListComponentModule, HttpClientModule, AptoIconComponentModule, AptoCardComponentModule ],
            providers: [ AptoIconRegistry ]
        })
    )

    .add('Basic Usage',  withMarkdownNotes(`${propertiesMd}`)(() => ({
        component: ListStoryComponent
    })))
;
