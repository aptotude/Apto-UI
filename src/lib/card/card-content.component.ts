import { ChangeDetectionStrategy, Component, ViewEncapsulation, Directive } from '@angular/core';

@Directive({
    selector: 'apto-card-content[noPadding]',
    host: {'class': 'apto-card--content--no-padding'}
})
export class AptoCardNoPaddingDirective {

}

@Component({
    selector: 'apto-card-content',
    templateUrl: 'card-content.html',
    styleUrls: [ './card-content.scss' ],
    host: {'class': 'apto-card--content'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardContentComponent {

}
