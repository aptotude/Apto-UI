import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'apto-list',
    template: '<ng-content></ng-content>',
    styleUrls: ['./list.scss'],
    host: {
        'class': 'AptoList'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoListComponent {
}
