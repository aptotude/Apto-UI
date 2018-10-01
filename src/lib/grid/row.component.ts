import { Component, Input, HostBinding, ViewEncapsulation, Directive, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty } from '../utils';

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
        return this._getClass();
    }

    private _getClass(): string {
        const classes = [];
        if (this.xs) {
            classes.push(this._parseAttribute(this.xs, ''));
        }
        if (this.sm) {
            classes.push(this._parseAttribute(this.sm, 'sm'));
        }
        if (this.md) {
            classes.push(this._parseAttribute(this.md, 'md'));
        }
        if (this.lg) {
            classes.push(this._parseAttribute(this.lg, 'lg'));
        }
        if (this.xl) {
            classes.push(this._parseAttribute(this.xl, 'xl'));
        }
        if (classes.length) {
            return classes.join(' ');
        }
        return 'AptoCol';
    }

    // count can be [1-12], 'auto', true, 'true'
    // size can be xs,sm,md,lg,xl
    private _parseAttribute(count: any, size: string): string {
        if (size !== '') {
            size = `-${size}`;
        }
        if (count === 'true' || count === true) {
            return `AptoCol${size}`;
        } else {
            return `AptoCol${size}-${count}`;
        }
    }
}

@Component({
    selector: 'apto-row',
    template: '<ng-content select="apto-col"></ng-content>',
    styleUrls: ['./row.scss'],
    host: {
        'class': 'AptoRow',
        '[class.AptoRow--noGutter]': 'noGutter'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptoGridRowComponent {
    @Input()
        get noGutter(): boolean {
            return this._noGutter;
        }
        set noGutter(noGutter: boolean) {
            this._noGutter = coerceBooleanProperty(noGutter);
        }

    private _noGutter = false;
}
