import { Component, Directive, HostBinding, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: 'apto-card-footer-left'
})
export class AptoCardFooterLeftDirective {
    @HostBinding('class.apto-card--footer-left') footerLeftClass = 'apto-card--footer-left';
}

@Directive({
    selector: 'apto-card-footer-right'
})
export class AptoCardFooterRightDirective {
    @HostBinding('class.apto-card--footer-right') footerRightClass = 'apto-card--footer-right';
}

@Component({
    selector: 'apto-card-footer',
    templateUrl: 'card-footer.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AptoCardFooterComponent {
    @HostBinding('class.apto-card--footer') footerClass = 'apto-card--footer';
}
