import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ElementRef,
    Attribute,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { AptoIconRegistry } from './icon-registry';
import { take } from 'rxjs/operators/take';
import { coerceBooleanProperty } from '../utils';

export enum IconColors {
    white = 'white',
    blue = 'blue',
    orange = 'orange',
    gray = 'gray',
    lightGray = 'lightGray'
}

@Component({
    selector: 'apto-icon',
    styleUrls: ['./icon.scss'],
    template: '<ng-content></ng-content>',
    host: {
        'class': 'apto-icon',
        'role': 'img',
        '[class.apto-icon--inline]': 'inline',
        '[class.apto-icon--circle]': 'circle'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoIconComponent implements OnChanges {
    @Input() public icon: string = null;
    @Input() public size: number = null;
    @Input() public circleColor: IconColors = null;
    @Input()
        get circle(): boolean {
            return this._circle;
        }
        set circle(circle: boolean) {
            this._circle = coerceBooleanProperty(circle);
        }
    @Input()
        get inline(): boolean {
            return this._inline;
        }
        set inline(inline: boolean) {
            this._inline = coerceBooleanProperty(inline);
        }

    private _circle = false;
    private _inline = false;

    constructor(
        private _elementRef: ElementRef,
        private _iconRegistry: AptoIconRegistry,
        @Attribute('aria-hidden') public ariaHidden: string) {
        if (!ariaHidden) {
            this._elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.icon) {
            if (this.icon) {
                const [namespace, iconName] = this._splitIconName(this.icon);
                this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe(
                    svg => this._setSvgElement(svg),
                    (err: Error) => console.log(`Error retrieving icon: ${err.message}`)
                );
            } else {
                this._clearSvgElement();
            }
        }

        if (changes.circleColor) {
            if (changes.circleColor.previousValue) {
                this._elementRef.nativeElement.classList.remove(`apto-icon--color-${changes.circleColor.previousValue}`);
            }
            this._elementRef.nativeElement.classList.add(`apto-icon--color-${this.circleColor}`);
        }

        if (changes.size) {
            if (changes.size.previousValue) {
                this._elementRef.nativeElement.classList.remove(`apto-icon--size-${changes.size.previousValue}`);
            }
            this._elementRef.nativeElement.classList.add(`apto-icon--size-${this.size}`);
        }
    }

    private _splitIconName(iconName: string): [string, string] {
        if (!iconName) {
          return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]];
            case 2: return <[string, string]>parts;
            default: throw Error(`Invalid icon name: "${iconName}"`);
        }
    }

    private _setSvgElement(svg: SVGElement) {
        this._clearSvgElement();
        this._elementRef.nativeElement.appendChild(svg);
    }

    private _clearSvgElement() {
        const layoutElement: HTMLElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
}
