import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoGridComponentModule } from './grid.module';

storiesOf('Grid', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoGridComponentModule ]
        })
    )
    .add('Equal Width', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col><div class="row-dec">2 of 3</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col><div class="row-dec">1 of 2</div></apto-col>
                <apto-col><div class="row-dec">2 of 2</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('One Column Width', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col xs=6><div class="row-dec">2 of 3 (wider) (xs=6)</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('Variable Width Content', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col md="auto"><div class="row-dec">Variable width content (md=auto)</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('All Breakpoints', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col><div class="row-dec">col</div></apto-col>
                <apto-col><div class="row-dec">col</div></apto-col>
                <apto-col><div class="row-dec">col</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col xs=8><div class="row-dec">xs=8</div></apto-col>
                <apto-col xs=4><div class="row-dec">xs=4</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('Stacked to horizontal', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col sm=8><div class="row-dec">sm=8</div></apto-col>
                <apto-col sm=4><div class="row-dec">sm=4</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('Mix And Match', () => ({
        template: `<apto-container>
            <apto-row>
                <apto-col xs=12 md=8><div class="row-dec">xs=12 md=8</div></apto-col>
                <apto-col xs=6 md=4><div class="row-dec">xs=6 md=4</div></apto-col>
            </apto-row>
        </apto-container>`
    }))
    .add('No Container', () => ({
        template: `<apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col><div class="row-dec">2 of 3</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>`
    })
);
