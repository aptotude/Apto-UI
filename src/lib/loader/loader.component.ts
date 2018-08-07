import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Directive } from '@angular/core';

@Directive({
    selector: 'apto-loader[noOverlay]',
    host: {'class': 'apto-loader--no-overlay'}
})
export class AptoLoaderNoOverlayDirective {

}

@Component({
    selector: 'apto-loader',
    templateUrl: 'loader.html',
    styleUrls: [ './loader.scss' ],
    host: {'class': 'apto-loader'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoLoaderComponent {
    @Input() public text = '';
}
