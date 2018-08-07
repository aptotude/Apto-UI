import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-card-header',
    templateUrl: 'card-header.html',
    styleUrls: [ './card-header.scss' ],
    host: {'class': 'apto-card--header'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardHeaderComponent {

}
