import { Component, Input, HostBinding, ViewEncapsulation, Directive } from '@angular/core';

@Directive({
    selector: 'apto-col'
})
export class AptoGridColumnDirective {
    @Input() xs: any;
    @Input() sm: any;
    @Input() md: any;
    @Input() lg: any;
    @Input() xl: any;

    @HostBinding('class') get col() {
        const classes = [];
        if (this.xs) {
            classes.push(this.parseAttribute(this.xs, ''));
        }
        if (this.sm) {
            classes.push(this.parseAttribute(this.sm, 'sm'));
        }
        if (this.md) {
            classes.push(this.parseAttribute(this.md, 'md'));
        }
        if (this.lg) {
            classes.push(this.parseAttribute(this.lg, 'lg'));
        }
        if (this.xl) {
            classes.push(this.parseAttribute(this.xl, 'xl'));
        }
        if (classes.length) {
            return classes.join(' ');
        }
        return 'apto-col';
    }

    public parseAttribute(count: any, size: string): string {
        if (size !== '') {
            size = `-${size}`;
        }
        if (count === 'true' || count === true) {
            return `apto-col${size}`
        } else {
            return `apto-col${size}-${count}`
        }
    }
}

@Component({
    selector: 'apto-row',
    templateUrl: 'row.html',
    styleUrls: [ './grid.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class AptoGridRowComponent {
    @HostBinding('class') public rowClass = 'apto-row';
}

@Component({
    selector: 'apto-container',
    templateUrl: 'container.html',
    styleUrls: [ './grid.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class AptoGridContainerComponent {
    @Input() public fluid = true;
}
