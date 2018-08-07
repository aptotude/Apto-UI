import { ChangeDetectionStrategy, Component, Directive, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-card',
    templateUrl: 'card.html',
    styleUrls: [ './card.scss' ],
    host: {'class': 'apto-card'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardComponent {

}
