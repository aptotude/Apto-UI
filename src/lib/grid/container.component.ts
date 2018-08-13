import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, Directive } from '@angular/core';

@Directive({
    selector: 'apto-container[fixed]',
    host: {'class': 'apto-container--fixed'}
})
export class AptoGridContainerFixedDirective {}

@Directive({
    selector: 'apto-container[scroll]',
    host: {'class': 'apto-container--scroll'}
})
export class AptoGridContainerScrollDirective {}

@Component({
    selector: 'apto-container',
    templateUrl: 'container.html',
    styleUrls: ['./container.scss'],
    host: {'class': 'apto-container'},
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridContainerComponent {}
