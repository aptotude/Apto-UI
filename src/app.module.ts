import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AptoButtonComponentModule } from './lib/button/button.module';

@NgModule({
    imports: [
        BrowserModule,
        AptoButtonComponentModule
    ],
    declarations: [],
    providers: [],
    bootstrap: []
})
export class AppModule { }
