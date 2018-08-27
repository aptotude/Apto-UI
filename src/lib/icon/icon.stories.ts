import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoIconComponentModule } from './icon.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as iconMd from './docs/icon.md';
import { AptoIconRegistry } from './icon-registry';
import { AptoGridComponentModule } from '../grid';
import { HttpClientModule } from "@angular/common/http";
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {number, select, withKnobs} from '@storybook/addon-knobs/angular';
import { AptoButtonComponentModule } from '../button/button.module';

@Component({
    selector: 'icon-story',
    template: `
        <style>
            apto-col{margin-bottom: 1rem; text-align: center;}
            .icon-meta{ border-top: 1px solid green; }
        </style>
        <apto-container>
            <apto-row>
                <apto-col sm="2"><apto-icon icon="property"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="company"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon aria-label="Email" icon="email"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="check"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="checkCircle"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="add"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="menu"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="phone"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="folder"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="edit"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="help"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="callList"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="close"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="person"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="personCircle"></apto-icon></apto-col>
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
                <apto-col sm="2"><apto-icon icon="home"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="meeting"></apto-icon></apto-col>
                <apto-col sm="2"><apto-icon icon="file"></apto-icon></apto-col>
                </apto-row>
            <h3>Rounded Icons</h3>
            <apto-row>
                <apto-col><apto-icon circle size="1" icon="property"></apto-icon></apto-col>
                <apto-col><apto-icon circle size="2" icon="person"></apto-icon></apto-col>
                <apto-col><apto-icon circle icon="property"></apto-icon></apto-col>
                <apto-col><apto-icon circle size="4" icon="property"></apto-icon></apto-col>
                <apto-col><apto-icon circle size="5" icon="property"></apto-icon></apto-col>
                <apto-col><apto-icon circle size="6" icon="property"></apto-icon></apto-col>
            </apto-row>
            <h3>Inline Icons</h3>
            <apto-row>
                <apto-col><apto-button><apto-icon inline icon="download"></apto-icon> Download</apto-button></apto-col>
                <apto-col><apto-button><apto-icon inline icon="download"></apto-icon> Download <apto-icon inline icon="down"></apto-icon></apto-button></apto-col>
                <apto-col><apto-button>Download <apto-icon inline icon="down"></apto-icon></apto-button></apto-col>
                <apto-col><apto-icon inline icon="thumbUp"></apto-icon> Inline Text</apto-col>
            </apto-row>
        </apto-container>
    `
})
export class IconStoryComponent {
    constructor(iconRegistry: AptoIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSetInNamespace('', sanitizer.bypassSecurityTrustResourceUrl('/apto-icon-sprite.svg'));
    }
}

@Component({
    selector: 'icon-size-story',
    template: `
        <style>
            apto-col{margin-bottom: 1rem; text-align: center;}
            .icon-meta{ border-top: 1px solid green; }
        </style>
        <apto-container>
            <apto-row>
                <apto-col><apto-icon [size]="iconSize" icon="property"></apto-icon><div class="icon-meta">size="{{iconSize}}"</div></apto-col>
                <apto-col><apto-icon size="2" icon="property"></apto-icon><div class="icon-meta">size="2"</div></apto-col>
                <apto-col><apto-icon icon="property"></apto-icon><div class="icon-meta">default / size="3"</div></apto-col>
                <apto-col><apto-icon size="4" icon="property"></apto-icon><div class="icon-meta">size="4"</div></apto-col>
                <apto-col><apto-icon size="5" icon="property"></apto-icon><div class="icon-meta">size="5"</div></apto-col>
                <apto-col><apto-icon size="6" icon="property"></apto-icon><div class="icon-meta">size="6"</div></apto-col>
            </apto-row>
            <apto-icon [size]="iconSize" [color]="iconColor" icon="property"></apto-icon><div class="icon-meta">size="{{iconSize}}"</div>
        </apto-container>
    `
})
export class IconSizeStoryComponent {
    constructor(iconRegistry: AptoIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSetInNamespace('', sanitizer.bypassSecurityTrustResourceUrl('/apto-icon-sprite.svg'));
    }
}


storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoIconComponentModule, AptoGridComponentModule, HttpClientModule, AptoButtonComponentModule ],
            providers: [ AptoIconRegistry ]
        })
    )
    .add('Icon Set', withMarkdownNotes(iconMd)(() => ({
        component: IconStoryComponent,
    })))
    .add('Icon Sizes', withMarkdownNotes(iconMd)(() => ({
        component: IconSizeStoryComponent,
        props: {
            iconSize: number('iconSize', 1, {
                min: 1,
                max: 6,
                step: 1
            }),
            iconColor: select('iconColor', {
                primary: 'primary',
                secondary: 'secondary',
                none: 'none'
            }, 'none')
        }
    })))
;
