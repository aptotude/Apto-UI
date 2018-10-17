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
            <apto-col xs="2"><span class="colorSwatch gray-800"></span>$gray-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-700"></span>$gray-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-650"></span>$gray-650</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-600"></span>$gray-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-550"></span>$gray-550</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-500"></span>$gray-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-450"></span>$gray-450</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-400"></span>$gray-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-300"></span>$gray-300</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-200"></span>$gray-200</apto-col>
            <apto-col xs="2"><span class="colorSwatch gray-100"></span>$gray-100</apto-col>
        </apto-row>

        <h3>Blue Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch blue-800"></span>$blue-800</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-700"></span>$blue-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-600"></span>$blue-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-500"></span>$blue-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-400"></span>$blue-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch blue-300"></span>$blue-300</apto-col>
        </apto-row>

        <h3>Orange Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch orange-700"></span>$orange-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-500"></span>$orange-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-400"></span>$orange-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-350"></span>$orange-350</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-300"></span>$orange-300</apto-col>
            <apto-col xs="2"><span class="colorSwatch orange-200"></span>$orange-200</apto-col>
        </apto-row>

        <h3>Red Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch red-700"></span>$red-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-500"></span>$red-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-400"></span>$red-400</apto-col>
            <apto-col xs="2"><span class="colorSwatch red-300"></span>$red-300</apto-col>
        </apto-row>

        <h3>Green Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch green-700"></span>$green-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch green-500"></span>$green-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch green-300"></span>$green-300</apto-col>
        </apto-row>

        <h3>Yellow Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch yellow-700"></span>$yellow-700</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-600"></span>$yellow-600</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-500"></span>$yellow-500</apto-col>
            <apto-col xs="2"><span class="colorSwatch yellow-300"></span>$yellow-300</apto-col>
        </apto-row>

        <h3>Purple Color Family</h3>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch purple-500"></span>$purple-500</apto-col>
        </apto-row>

        <hr>

        <h2>Named Colors</h2>
        <apto-row class="colorSwatches">
            <apto-col xs="2"><span class="colorSwatch black"></span>$black</apto-col>
            <apto-col xs="2"><span class="colorSwatch white"></span>$white</apto-col>
            <apto-col xs="2"><span class="colorSwatch primary-blue"></span>$primary-blue</apto-col>
            <apto-col xs="2"><span class="colorSwatch danger"></span>$danger</apto-col>
            <apto-col xs="2"><span class="colorSwatch warning"></span>$warning</apto-col>
            <apto-col xs="2"><span class="colorSwatch success"></span>$success</apto-col>
        </apto-row>

        <hr>

        <h2>Font Sizes</h2>
        <p class="font-size-xl">$font-size-xl</p>
        <p class="font-size-lg">$font-size-lg</p>
        <p class="font-size-base">$font-size-base</p>
        <p class="font-size-md">$font-size-md</p>
        <p class="font-size-sm">$font-size-sm</p>

        <hr>

        <h2>Font Weights</h2>
        <p class="font-weight-light">$font-weight-light</p>
        <p class="font-weight-normal">$font-weight-normal</p>
        <p class="font-weight-semibold">$font-weight-semibold</p>
        <p class="font-weight-bold">$font-weight-bold</p>
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
