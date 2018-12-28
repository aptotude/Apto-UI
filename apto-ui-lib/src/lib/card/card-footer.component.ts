import { Component, Directive, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: '[apto-card-footer-left],apto-card-footer-left',
    host: {'class': 'AptoCardFooter-left'}

})
export class AptoCardFooterLeftDirective {}

@Directive({
    selector: '[apto-card-footer-right],apto-card-footer-right',
    host: {'class': 'AptoCardFooter-right'}
})
export class AptoCardFooterRightDirective {}

@Component({
    selector: 'apto-card-footer',
    templateUrl: 'card-footer.html',
    styleUrls: ['./card-footer.scss'],
    host: {'class': 'AptoCardFooter'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AptoCardFooterComponent {}
