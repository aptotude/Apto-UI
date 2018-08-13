import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-shimmer',
    templateUrl: 'shimmer.html',
    styleUrls: ['./shimmer.scss'],
    host: {'class': 'apto-shimmer'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoShimmerComponent {}
