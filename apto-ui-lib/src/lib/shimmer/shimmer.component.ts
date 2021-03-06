import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-shimmer',
    template: '<ng-content></ng-content>',
    styleUrls: ['./shimmer.scss'],
    host: {'class': 'AptoShimmer'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoShimmerComponent {}
