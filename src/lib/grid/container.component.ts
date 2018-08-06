import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'apto-container,[apto-container]',
    templateUrl: 'container.html',
    styleUrls: [ './container.scss' ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridContainerComponent {
    @HostBinding('class.apto-container') public containerClass = true;
    @HostBinding('class.apto-container--fixed') @Input() public fixed = false;
    @HostBinding('class.apto-container--scroll') @Input() public scroll = false;
}
