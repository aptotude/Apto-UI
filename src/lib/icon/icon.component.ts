import {
    Component,
    Input,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ElementRef,
    Attribute,
    OnChanges,
    SimpleChanges,
    HostBinding
} from '@angular/core';
import { AptoIconRegistry } from './icon-registry';
import { take } from 'rxjs/operators/take';

@Component({
    selector: 'apto-icon',
    styleUrls: ['./icon.scss'],
    template: '<ng-content></ng-content>',
    host: {
        'class': 'apto-icon',
        'role': 'img'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoIconComponent implements OnChanges {
    @Input() public icon: string = null;
    @Input() public size: number = null;
    @Input() public color: string = null;

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
        if (changes.color) {
            if (changes.color.previousValue) {
                this._elementRef.nativeElement.classList.remove(`apto-icon--${changes.color.previousValue}`);
            }
            this._elementRef.nativeElement.classList.add(`apto-icon--${this.color}`);
        }
        if (changes.size) {
            if (changes.size.previousValue) {
                this._elementRef.nativeElement.classList.remove(`apto-icon--${changes.size.previousValue}`);
            }
            this._elementRef.nativeElement.classList.add(`apto-icon--${this.size}`);
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
