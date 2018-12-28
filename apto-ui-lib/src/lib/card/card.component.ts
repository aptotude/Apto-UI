import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-card',
    templateUrl: 'card.html',
    styleUrls: ['./card.scss'],
    host: {'class': 'AptoCard'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardComponent {}
