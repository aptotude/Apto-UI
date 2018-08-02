import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AptoButtonComponentModule } from './lib/button/button.module';
import { AptoTooltipComponentModule } from './lib/tooltip/tooltip.module';
import { AptoGridComponentModule } from './lib/grid/grid.module';

@NgModule({
    imports: [
        BrowserModule,
        AptoButtonComponentModule,
        AptoTooltipComponentModule,
        AptoGridComponentModule
    ],
    declarations: [],
    providers: [],
    bootstrap: []
})
export class AppModule { }
