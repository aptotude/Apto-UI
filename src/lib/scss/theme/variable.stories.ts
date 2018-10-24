import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { Component } from '@angular/core';
import { AptoGridComponentModule } from '../../grid';

@Component({
    styleUrls: ['./variable-docs.scss'],
    template: `
        <h2>Color Swatches</h2>
        <h3>Gray Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch gray-800">#212121</span>$gray-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-700">#616161</span>$gray-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-650">#808080</span>$gray-650</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-600">#9E9E9E</span>$gray-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-550">#908e8e</span>$gray-550</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-500">#BDBDBD</span>$gray-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-450">#DEDEDE</span>$gray-450</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-400">#E0E0E0</span>$gray-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-300">#EEEEEE</span>$gray-300</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-200">#F5F5F5</span>$gray-200</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-100">#FAFAFA</span>$gray-100</apto-col>
        </apto-row>

        <h3>Blue Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch blue-800">#063F6D</span>$blue-800</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-700">#0667B5</span>$blue-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-600">#0087F4</span>$blue-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-500">#64B5F6</span>$blue-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-400">#BBDEFB</span>$blue-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-300">#EDF4FA</span>$blue-300</apto-col>
        </apto-row>

        <h3>Orange Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch orange-700">#D48004</span>$orange-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-500">#FF9800</span>$orange-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-400">#F6A623</span>$orange-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-350">#FAC68C</span>$orange-350</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-300">#FDDFB4</span>$orange-300</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-200">#FFF2E3</span>$orange-200</apto-col>
        </apto-row>

        <h3>Red Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch red-700">#981818</span>$red-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-500">#D32F2F</span>$red-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-400">#dc3545</span>$red-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-300">#FEE9E9</span>$red-300</apto-col>
        </apto-row>

        <h3>Green Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch green-700">#4CAF50</span>$green-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch green-500">#61DC66</span>$green-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch green-300">#E4F7E5</span>$green-300</apto-col>
        </apto-row>

        <h3>Yellow Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch yellow-700">#B89D11</span>$yellow-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-600">#DCBC13</span>$yellow-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-500">#F9D100</span>$yellow-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-300">#FFF9D4</span>$yellow-300</apto-col>
        </apto-row>

        <h3>Purple Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch purple-500">#b175e8</span>$purple-500</apto-col>
        </apto-row>

        <hr>

        <h2>Named Colors</h2>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch black">#212121</span>$black</apto-col>
            <apto-col xs="2"><span class="colorSwatch white">#ffffff</span>$white</apto-col>
            <apto-col xs="2"><span class="colorSwatch primary-blue">#64B5F6</span>$primary-blue</apto-col>
            <apto-col xs="2"><span class="colorSwatch danger">#981818</span>$danger</apto-col>
            <apto-col xs="2"><span class="colorSwatch warning">#FF9800</span>$warning</apto-col>
            <apto-col xs="2"><span class="colorSwatch success">#4CAF50</span>$success</apto-col>
        </apto-row>

        <hr>

        <h2>Font Sizes</h2>
        <p class="font-size-xl">$font-size-xl (2.2rem / 22px)</p>
        <p class="font-size-lg">$font-size-lg (1.8rem / 18px)</p>
        <p class="font-size-base">$font-size-base (1.4rem / 14px)</p>
        <p class="font-size-md">$font-size-md (1.2rem 12px)</p>
        <p class="font-size-sm">$font-size-sm (1.0rem 10px)</p>

        <hr>

        <h2>Font Weights</h2>
        <p class="font-weight-light">$font-weight-light (400)</p>
        <p class="font-weight-normal">$font-weight-normal (500)</p>
        <p class="font-weight-semibold">$font-weight-semibold (600)</p>
        <p class="font-weight-bold">$font-weight-bold (700)</p>
    `
})
export class ThemeStoryComponent {

}

storiesOf('Theme', module)
    .addDecorator(
        moduleMetadata({
            imports: [AptoGridComponentModule]
        })
    )
    .add('Sass Variables', withMarkdownNotes('')(() => ({
        component: ThemeStoryComponent
    })))
;
