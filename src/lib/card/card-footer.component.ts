import { Component, Directive, HostBinding, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: 'apto-card-footer-left'
})
export class AptoCardFooterLeftDirective {
    @HostBinding('class.apto-card--footer-left') public footerLeftClass = true;
}

@Directive({
    selector: 'apto-card-footer-right'
})
export class AptoCardFooterRightDirective {
    @HostBinding('class.apto-card--footer-right') public footerRightClass = true;
}

@Component({
    selector: 'apto-card-footer',
    templateUrl: 'card-footer.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AptoCardFooterComponent {
    @HostBinding('class.apto-card--footer') public footerClass = true;
}
