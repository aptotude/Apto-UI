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
import { take } from 'rxjs/operators';
import { coerceBooleanProperty } from '../utils';

export enum IconColors {
    white = 'white',
    blue = 'blue',
    orange = 'orange',
    gray = 'gray',
    lightGray = 'lightGray'
}

export enum IconStatus {
    warning = 'warning',
    danger = 'danger',
}

@Component({
    selector: 'apto-icon',
    styleUrls: ['./icon.scss'],
    template: '<ng-content></ng-content><span *ngIf="status" class="AptoIcon-status">!</span>',
    host: {
        'class': 'AptoIcon',
        'role': 'img',
        '[class.AptoIcon--inline]': 'inline',
        '[class.AptoIcon--circle]': 'circle'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoIconComponent implements OnChanges {
    @Input() public icon: string = null;
    @Input() public size: number = null;
    @Input() public circleColor: IconColors = null;
    @Input() public status: IconStatus = null;
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
                this._elementRef.nativeElement.classList.remove(`AptoIcon--color${this.capitailize(changes.circleColor.previousValue)}`);
            }
            this._elementRef.nativeElement.classList.add(`AptoIcon--color${this.capitailize(this.circleColor)}`);
        }

        if (changes.status) {
            if (changes.status.previousValue) {
                this._elementRef.nativeElement.classList.remove(`AptoIcon--status${this.capitailize(changes.status.previousValue)}`);
            }
            this._elementRef.nativeElement.classList.add(`AptoIcon--status${this.capitailize(this.status)}`);
        }

        if (changes.size) {
            if (changes.size.previousValue) {
                this._elementRef.nativeElement.classList.remove(`AptoIcon--size${changes.size.previousValue}`);
            }
            this._elementRef.nativeElement.classList.add(`AptoIcon--size${this.size}`);
        }
    }

    private capitailize(str: string): string {
        return str.charAt(0).toUpperCase() + str.substr(1);
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
