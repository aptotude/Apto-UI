import { Component, Input, HostBinding, ViewEncapsulation, Directive } from '@angular/core';

@Directive({
    selector: 'apto-col'
})
export class AptoGridColumnDirective {
    @Input() xs: number|string;
    @Input() sm: number|string;
    @Input() md: number|string;
    @Input() lg: number|string;
    @Input() xl: number|string;

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

    public parseAttribute(count: number|string, size: string): string {
        if (size !== '') {
            size = `-${size}`;
        }
        if (count === 'true') {
            return `apto-col${size}`;
        } else {
            return `apto-col${size}-${count}`;
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
    @Input() public noGutter = false;
    @HostBinding('class') public get row() {
        return `apto-row${this.noGutter ? ' no-gutter': ''}`;
    }
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
