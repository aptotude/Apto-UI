import { Component, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Directive({
    selector: 'apto-card-header'
})
export class AptoCardHeaderDirective {
    @HostBinding('class.apto-card--header') headerClass = 'apto-card--header';
}

@Component({
    selector: 'apto-card',
    templateUrl: 'card.html',
    styleUrls: [ './card.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class AptoCardComponent {
    @Input() public automationSelector: string = null;
}
