import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoIconComponentModule } from './icon.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as iconMd from './docs/icon.md';
import { AptoIconRegistry } from './icon-registry';
import { AptoGridComponentModule } from '../grid';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {number, select, withKnobs} from '@storybook/addon-knobs/angular';
import { AptoButtonComponentModule } from '../button/button.module';

@Component({
    template: `
        <style>
            apto-col{margin-bottom: 1rem; text-align: center;}
            .icon-meta{ display: block; border-top: 1px solid #efefef; }
            .icon-set-list apto-col { margin-bottom: 2rem; }
        </style>
        <apto-container>
            <apto-row class="icon-set-list">
                <apto-col sm="2"><apto-icon icon="property"></apto-icon><span class="icon-meta">property</span></apto-col>
                <apto-col sm="2"><apto-icon icon="company"></apto-icon><span class="icon-meta">company</span></apto-col>
                <apto-col sm="2"><apto-icon icon="home"></apto-icon><span class="icon-meta">home</span></apto-col>
                <apto-col sm="2"><apto-icon aria-label="Email" icon="email"></apto-icon><span class="icon-meta">email</span></apto-col>
                <apto-col sm="2"><apto-icon icon="add"></apto-icon><span class="icon-meta">add</span></apto-col>
                <apto-col sm="2"><apto-icon icon="menu"></apto-icon><span class="icon-meta">phone</span></apto-col>
                <apto-col sm="2"><apto-icon icon="phone"></apto-icon><span class="icon-meta"></span></apto-col>
                <apto-col sm="2"><apto-icon icon="folder"></apto-icon><span class="icon-meta">folder</span></apto-col>
                <apto-col sm="2"><apto-icon icon="edit"></apto-icon><span class="icon-meta">edit</span></apto-col>
                <apto-col sm="2"><apto-icon icon="help"></apto-icon><span class="icon-meta">help</span></apto-col>
                <apto-col sm="2"><apto-icon icon="callList"></apto-icon><span class="icon-meta">callList</span></apto-col>
                <apto-col sm="2"><apto-icon icon="close"></apto-icon><span class="icon-meta">close</span></apto-col>
                <apto-col sm="2"><apto-icon icon="person"></apto-icon><span class="icon-meta">person</span></apto-col>
                <apto-col sm="2"><apto-icon icon="personCircle"></apto-icon><span class="icon-meta">personCircle</span></apto-col>
                <apto-col sm="2"><apto-icon icon="people"></apto-icon><span class="icon-meta">people</span></apto-col>
                <apto-col sm="2"><apto-icon icon="download"></apto-icon><span class="icon-meta">download</span></apto-col>
                <apto-col sm="2"><apto-icon icon="search"></apto-icon><span class="icon-meta">search</span></apto-col>
                <apto-col sm="2"><apto-icon icon="thumbUp"></apto-icon><span class="icon-meta">thumbUp</span></apto-col>
                <apto-col sm="2"><apto-icon icon="time"></apto-icon><span class="icon-meta">time</span></apto-col>
                <apto-col sm="2"><apto-icon icon="task"></apto-icon><span class="icon-meta">task</span></apto-col>
                <apto-col sm="2"><apto-icon icon="money"></apto-icon><span class="icon-meta">money</span></apto-col>
                <apto-col sm="2"><apto-icon icon="list"></apto-icon><span class="icon-meta">list</span></apto-col>
                <apto-col sm="2"><apto-icon icon="meeting"></apto-icon><span class="icon-meta">meeting</span></apto-col>
                <apto-col sm="2"><apto-icon icon="file"></apto-icon><span class="icon-meta">file</span></apto-col>
                <apto-col sm="2"><apto-icon icon="assignment"></apto-icon><span class="icon-meta">assignment</span></apto-col>
                <apto-col sm="2"><apto-icon icon="peaks"></apto-icon><span class="icon-meta">peaks</span></apto-col>
                <apto-col sm="2"><apto-icon icon="link"></apto-icon><span class="icon-meta">link</span></apto-col>
            </apto-row>
            <h4 class="heading">Form Controls</h4>
            <apto-row class="icon-set-list">
                <apto-col sm="2"><apto-icon icon="radioOutline"></apto-icon><span class="icon-meta">radioOutline</span></apto-col>
                <apto-col sm="2"><apto-icon icon="radioChecked"></apto-icon><span class="icon-meta">radioChecked</span></apto-col>
                <apto-col sm="2"><apto-icon icon="checkboxOutline"></apto-icon><span class="icon-meta">checkboxOutline</span></apto-col>
                <apto-col sm="2"><apto-icon icon="checkboxChecked"></apto-icon><span class="icon-meta">checkboxChecked</span></apto-col>
                <apto-col sm="2"><apto-icon icon="check"></apto-icon><span class="icon-meta">check</span></apto-col>
                <apto-col sm="2"><apto-icon icon="checkCircle"></apto-icon><span class="icon-meta">checkCircle</span></apto-col>
            </apto-row>
            <h4 class="heading">Directions</h4>
            <apto-row class="icon-set-list">
                <apto-col sm="2"><apto-icon icon="left"></apto-icon><span class="icon-meta">left</span></apto-col>
                <apto-col sm="2"><apto-icon icon="right"></apto-icon><span class="icon-meta">right</span></apto-col>
                <apto-col sm="2"><apto-icon icon="up"></apto-icon><span class="icon-meta">up</span></apto-col>
                <apto-col sm="2"><apto-icon icon="down"></apto-icon><span class="icon-meta">down</span></apto-col>
                <apto-col sm="2"><apto-icon icon="dropDown"></apto-icon><span class="icon-meta">dropDown</span></apto-col>
                <apto-col sm="2"><apto-icon icon="dropUp"></apto-icon><span class="icon-meta">dropUp</span></apto-col>
            </apto-row>
            <h4 class="heading">Circle Icons ("circle" attribute)</h4>
            <p><apto-icon circle icon="property"></apto-icon></p>
            <h4 class="heading">Inline Icons ("inline" attribute)</h4>
            <p><apto-button><apto-icon inline icon="download"></apto-icon> Button</apto-button></p>
            <p>
                <apto-button>
                    <apto-icon inline icon="download"></apto-icon> Button <apto-icon inline icon="down"></apto-icon>
                </apto-button>
            </p>
            <p><apto-button>Button <apto-icon inline icon="down"></apto-icon></apto-button></p>
            <p><apto-icon inline icon="thumbUp"></apto-icon> Inline Text</p>
            <h4 class="heading">Sizing ("size" attribute)</h4>
            <p>
                <apto-icon inline size="1" icon="property"></apto-icon>
                <apto-icon inline circle size="1" icon="property"></apto-icon> size="1"
            </p>
            <p>
                <apto-icon inline size="2" icon="property"></apto-icon>
                <apto-icon inline circle size="2" icon="property"></apto-icon> size="2"
            </p>
            <p>
                <apto-icon inline size="3" icon="property"></apto-icon>
                <apto-icon inline circle size="3" icon="property"></apto-icon> default / size="3"
            </p>
            <p>
                <apto-icon inline size="4" icon="property"></apto-icon>
                <apto-icon inline circle size="4" icon="property"></apto-icon> size="4"
            </p>
            <p>
                <apto-icon inline size="5" icon="property"></apto-icon>
                <apto-icon inline circle size="5" icon="property"></apto-icon> size="5"
            </p>
            <p>
                <apto-icon inline size="6" icon="property"></apto-icon>
                <apto-icon inline circle size="6" icon="property"></apto-icon> size="6"
            </p>
            <h4 class="heading">Circle Color ("circleColor" attribute)</h4>
            <p><apto-icon inline circle icon="property"></apto-icon> circleColor=""</p>
            <p>
                <span style="background:black">
                    <apto-icon inline circle circleColor="white" icon="property"></apto-icon>
                </span> circleColor="white"
            </p>
            <p><apto-icon inline circle circleColor="blue" icon="property"></apto-icon> circleColor="blue"</p>
            <p><apto-icon inline circle circleColor="orange" icon="property"></apto-icon> circleColor="orange"</p>
            <p><apto-icon inline circle circleColor="lightGray" icon="property"></apto-icon> circleColor="lightGray"</p>
            <p><apto-icon inline circle circleColor="gray" icon="property"></apto-icon> circleColor="gray"</p>
            <h4 class="heading">Knobs</h4>
            <p>
                <apto-icon inline [size]="iconSize" icon="property"></apto-icon>
                <apto-icon inline circle [size]="iconSize" icon="property"></apto-icon> size="{{iconSize}}"
            </p>
            <p>
                <apto-icon inline circle [circleColor]="iconColor" icon="property"></apto-icon> circleColor="{{iconColor}}"
            </p>
        </apto-container>
    `
})
export class IconStoryComponent {
    @Input() public iconSize: number;
    @Input() public iconColor: string;
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
        props: {
            iconSize: number('iconSize', 1, {
                min: 1,
                max: 6,
                step: 1
            }),
            iconColor: select('iconColor', {
                white: 'white',
                blue: 'blue',
                orange: 'orange',
                lightGray: 'lightGray',
                gray: 'gray',
                none: 'none'
            }, 'none')
        }
    })))
;
