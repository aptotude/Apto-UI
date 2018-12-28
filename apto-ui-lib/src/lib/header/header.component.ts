import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-header',
    templateUrl: 'header.html',
    styleUrls: ['./header.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoHeaderComponent {
    @Input() public type = 1;
}
