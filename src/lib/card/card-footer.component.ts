import { Component, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: 'apto-card-footer-left',
    host: {'class': 'apto-card--footer--left'}

})
export class AptoCardFooterLeftDirective {}

@Directive({
    selector: 'apto-card-footer-right',
    host: {'class': 'apto-card--footer--right'}
})
export class AptoCardFooterRightDirective {}

@Component({
    selector: 'apto-card-footer',
    templateUrl: 'card-footer.html',
    styleUrls: ['./card-footer.scss'],
    host: {'class': 'apto-card--footer'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AptoCardFooterComponent {}
