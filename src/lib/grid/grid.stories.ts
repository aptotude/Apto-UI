import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoGridComponentModule } from './grid.module';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Grid', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoGridComponentModule ]
        })
    )
    .add('Default', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <ul>
            <li>Apto Containers provide a means to center and horizontally pad your site’s contents. Use &lt;apto-container&gt; for a responsive pixel width or &lt;apto-container fluid=true&gt; for width: 100% across all viewport and device sizes.</li>
            <li>Apto Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>
            <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>
            <li>Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of &lt;apto-col xs=true&gt; will each automatically be 25% wide from the small breakpoint and up.</li>
            <li>Apto Column directive indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use &lt;apto-col xs=4&gt;.</li>
            <li>Apto Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
            <li>Apto Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from rows and padding from columns with by adding the noGutter=true attribute to the &lt;apto-row&gt;. IE &lt;apto-row noGutter=true&gt;</li>
            <li>To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.</li>
            <li>Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., &lt;apto-col sm=4&gt; applies to small, medium, large, and extra large devices, but not the first xs breakpoint).</li>
        </ul>
        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th></th>
                <th class="text-center">
                Extra small<br>
                <small>&lt;576px</small>
                </th>
                <th class="text-center">
                Small<br>
                <small>≥576px</small>
                </th>
                <th class="text-center">
                Medium<br>
                <small>≥768px</small>
                </th>
                <th class="text-center">
                Large<br>
                <small>≥992px</small>
                </th>
                <th class="text-center">
                Extra large<br>
                <small>≥1200px</small>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th class="text-nowrap" scope="row">Max container width</th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">Apto Column attribute</th>
                <td><code>xs=""-</code></td>
                <td><code>sm=""</code></td>
                <td><code>md=""</code></td>
                <td><code>lg=""</code></td>
                <td><code>xl=""</code></td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row"># of columns</th>
                <td colspan="5">12</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">Gutter width</th>
                <td colspan="5">30px (15px on each side of a column)</td>
            </tr>
            <tr>
                <th class="text-nowrap" scope="row">Nestable</th>
                <td colspan="5">Yes</td>
            </tr>
            </tbody>
        </table>
        <h1>Auto-layout columns</h1>
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit apto-col attribute like sm=6.</p>
        <h2>Equal-width</h2>
        <p>For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of &lt;apt-col&gt; for each breakpoint you need and every column will be the same width.</p>
    `)(() => ({
        template: `
        <apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col><div class="row-dec">2 of 3</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col><div class="row-dec">1 of 2</div></apto-col>
                <apto-col><div class="row-dec">2 of 2</div></apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('On Column Width', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <h1>Setting one column width</h1>
        <p>You can set the width of one column and have the sibling columns automatically resize around it. Note that the other columns will resize no matter the width of the center column.</p>
    `)(() => ({
        template: `
        <apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col xs=6><div class="row-dec">2 of 3 (wider) (xs=6)</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Variable width content', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <h1>Variable width content</h1>
        <p>Use xs|sm|md|lg|xl="auto" apto-col attribute to size columns based on the natural width of their content.</p>
    `)(() => ({
        template: `
        <apto-container>
            <apto-row>
                <apto-col><div class="row-dec">1 of 3</div></apto-col>
                <apto-col md="auto"><div class="row-dec">Variable width content (md=auto)</div></apto-col>
                <apto-col><div class="row-dec">3 of 3</div></apto-col>
            </apto-row>
        </apto-container>
    `
    })))
    .add('All Breakpoints', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <h1>All breakpoints</h1>
        <p>For grids that are the same from the smallest of devices to the largest, use the &lt;apto-col&gt; and &lt;apto-col xs|sm|md|lg|xl="*"&gt; directives. Specify a number when you need a particularly sized column; otherwise, feel free to stick to &lt;apto-col&gt;.</p>
    `)(() => ({
        template: `
        <apto-container>
            <apto-row>
                <apto-col><div class="row-dec">col</div></apto-col>
                <apto-col><div class="row-dec">col</div></apto-col>
                <apto-col><div class="row-dec">col</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col xs=8><div class="row-dec">xs=8</div></apto-col>
                <apto-col xs=4><div class="row-dec">xs=4</div></apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Stacked to Horizontal', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <h1>Stacked to horizontal</h1>
        <p>Using a single set of &lt;apto-col sm=*&gt; directives, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (sm).</p>
    `)(() => ({
        template: `
            <apto-container>
            <apto-row>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
                <apto-col sm=true><div class="row-dec">sm=true</div></apto-col>
            </apto-row>
            <apto-row>
                <apto-col sm=8><div class="row-dec">sm=8</div></apto-col>
                <apto-col sm=4><div class="row-dec">sm=4</div></apto-col>
            </apto-row>
        </apto-container>
        `
    })))
    .add('Mix and Match', withNotes(`
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <h1>Mix and match</h1>
        <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different apto-col attributes for each tier as needed. See the example below for a better idea of how it all works.</p>
    `)(() => ({
        template: `
        <apto-container>
            <apto-row>
                <apto-col xs=12 md=8><div class="row-dec">xs=12 md=8</div></apto-col>
                <apto-col xs=6 md=4><div class="row-dec">xs=6 md=4</div></apto-col>
            </apto-row>
        </apto-container>
        <pre style="margin-top:3rem">
            &lt;apto-container&gt;
                &lt;apto-row&gt;
                    &lt;apto-col xs="12" md="8"&gt; &lt;/apto-col&gt;
                    &lt;apto-col xs="6" md="4"&gt; &lt;/apto-col&gt;
                &lt;/apto-row&gt;
            &lt;/apto-container&gt;
        </pre>
        `
    })))
;
