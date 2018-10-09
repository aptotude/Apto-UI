import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoListComponentModule } from './list.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { AptoIconComponentModule, AptoIconRegistry } from '../icon';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { AptoCardComponentModule } from '../card';

import * as propertiesMd from './docs/properties.md';
import * as basicMd from './docs/basicList.md';
import * as emptyMd from './docs/emptyList.md';
import * as iconLinkMd from './docs/iconLinkList.md';
import * as iconMd from './docs/iconList.md';
import * as linkMd from './docs/linkList.md';

@Component({
    template: `
    <div *ngIf="showBasic">
        <h3>Standalone List</h3>
        <apto-list >
            <apto-list-item>
                First Thing
            </apto-list-item>
            <apto-list-item>
                Second Thing
            </apto-list-item>
            <apto-list-item>
                Third Thing
            </apto-list-item>
        </apto-list>
    </div>

    <div *ngIf="showBasic">
        <h3>List In A Card</h3>
        <apto-card>
            <apto-card-header noBottomPadding>Header</apto-card-header>
            <apto-card-content noPadding>
                <apto-list>
                    <apto-list-item>
                        First Thing
                    </apto-list-item>
                    <apto-list-item>
                        Second Thing
                    </apto-list-item>
                    <apto-list-item>
                        Third Thing
                    </apto-list-item>
                </apto-list>
            </apto-card-content>
        </apto-card>
    </div>

    <apto-card *ngIf="showLink">
        <apto-card-header noBottomPadding>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item link>
                    First Thing Link
                </apto-list-item>
                <apto-list-item link>
                    Second Thing Link
                </apto-list-item>
                <apto-list-item link>
                    Third Thing Link
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>

    <apto-card *ngIf="showIcon">
        <apto-card-header noBottomPadding>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    First Thing Icon
                </apto-list-item>
                <apto-list-item>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    Second Thing Icon
                </apto-list-item>
                <apto-list-item>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    Third Thing Icon
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>

    <apto-card *ngIf="showIconLink">
        <apto-card-header noBottomPadding>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item link>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    First Thing Icon With Link
                </apto-list-item>
                <apto-list-item link>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    Second Thing Icon With Link
                </apto-list-item>
                <apto-list-item link>
                    <apto-icon aptoListItemIcon icon="property" size="5" circle circleColor="blue"></apto-icon>
                    Third Thing Icon With Link
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>

    <apto-card *ngIf="showEmpty">
        <apto-card-header noBottomPadding>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item empty>
                    <apto-icon aptoListItemIcon circle circleColor="lightGray" icon="folder"></apto-icon>
                    Empty List With Icon So Add Stuff
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>

    <apto-card *ngIf="showEmpty">
        <apto-card-header noBottomPadding>Header</apto-card-header>
        <apto-card-content noPadding>
            <apto-list>
                <apto-list-item empty>
                    Empty List So Add Stuff
                </apto-list-item>
            </apto-list>
        </apto-card-content>
    </apto-card>

    `
})
export class ListStoryComponent {
    @Input() public showEmpty = false;
    @Input() public showLink = false;
    @Input() public showIcon = false;
    @Input() public showIconLink = false;
    @Input() public showBasic = false;


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

    .add('Basic Usage',  withMarkdownNotes(`${basicMd}${propertiesMd}`)(() => ({
        component: ListStoryComponent,
        props: {
            showBasic: true
        }
    })))

    .add('Link List',  withMarkdownNotes(`${linkMd}${propertiesMd}`)(() => ({
        component: ListStoryComponent,
        props: {
            showLink: true
        }
    })))

    .add('Icon List',  withMarkdownNotes(`${iconMd}${propertiesMd}`)(() => ({
        component: ListStoryComponent,
        props: {
            showIcon: true
        }
    })))

    .add('Icon Link List',  withMarkdownNotes(`${iconLinkMd}${propertiesMd}`)(() => ({
        component: ListStoryComponent,
        props: {
            showIconLink: true
        }
    })))

    .add('Empty List',  withMarkdownNotes(`${emptyMd}${propertiesMd}`)(() => ({
        component: ListStoryComponent,
        props: {
            showEmpty: true
        }
    })))
;
