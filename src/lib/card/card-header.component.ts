import { ChangeDetectionStrategy, Component, ViewEncapsulation, Directive } from '@angular/core';

@Directive({
    selector: 'apto-card-header[noBottomPadding]',
    host: {'class': 'apto-card--header--no-bottom-padding'}
})
export class AptoCardHeaderNoPaddingBottomDirective {}

@Component({
    selector: 'apto-card-header',
    templateUrl: 'card-header.html',
    styleUrls: ['./card-header.scss'],
    host: {'class': 'apto-card--header'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoCardHeaderComponent {}
