import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'apto-thumbnail',
    template: '<ng-content></ng-content>',
    styleUrls: ['./thumbnail.scss'],
    host: {
        'class': 'AptoThumbnail'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoThumbnailComponent {
}
