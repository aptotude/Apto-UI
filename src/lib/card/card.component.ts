import { ChangeDetectionStrategy, Component, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Directive({
    selector: 'apto-card-header'
})
export class AptoCardHeaderDirective {
    @HostBinding('class.apto-card--header') public headerClass = true;
}

@Component({
    selector: 'apto-card',
    templateUrl: 'card.html',
    styleUrls: [ './card.scss' ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardComponent {
    @Input() public automation: string = null;
    @HostBinding('class.apto-card') public cardClass = true;
    @HostBinding('attr.data-automation') get automationAttribute() {
        return this.automation ? this.automation : null;
    }
}