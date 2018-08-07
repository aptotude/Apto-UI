import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptoLoaderComponent, AptoLoaderNoOverlayDirective } from './loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AptoLoaderComponent,
        AptoLoaderNoOverlayDirective
    ],
    exports: [
        AptoLoaderComponent,
        AptoLoaderNoOverlayDirective
    ]
})
export class AptoLoaderComponentModule { }
