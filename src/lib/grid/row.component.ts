import { Component, Input, HostBinding, ViewEncapsulation, Directive, ChangeDetectionStrategy } from '@angular/core';

@Directive({
    selector: 'apto-col'
})
export class AptoGridColumnDirective {
    @Input() public xs: number|string|boolean;
    @Input() public sm: number|string|boolean;
    @Input() public md: number|string|boolean;
    @Input() public lg: number|string|boolean;
    @Input() public xl: number|string|boolean;
    @HostBinding('class') get colClass() {
        return this.getClass();
    }

    private getClass(): string {
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

    // count can be [1-12], 'auto', true, 'true'
    // size can be xs,sm,md,lg,xl
    private parseAttribute(count: any, size: string): string {
        if (count !== 'auto' && count !== 'true' && count !== true && !Number.isInteger(count)) {
            return '';
        }
        if (size !== '') {
            size = `-${size}`;
        }
        if (count === 'true' || count === true) {
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
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridRowComponent {
    @Input() public gutter = true;
    @HostBinding('class.apto-row') row = true;
    @HostBinding('class.apto-row--no-gutter') get gutterClass() {
        return this.gutter ? false : true;
    }
}
