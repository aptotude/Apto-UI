import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'apto-container',
    templateUrl: 'container.html',
    styleUrls: [ './container.scss' ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridContainerComponent {
    @Input() public fluid = true;
}
