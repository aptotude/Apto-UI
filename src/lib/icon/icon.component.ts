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

export enum IconSizes {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl'
}

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
    @Input() public size: IconSizes | string = null;

    @Input('aria-label') public label: string = null;
    @HostBinding('class.apto-icon--xs') get xsClass() {
        return this.size === IconSizes.XS;
    }
    @HostBinding('class.apto-icon--sm') get smClass() {
        return this.size === IconSizes.SM;
    }
    @HostBinding('class.apto-icon--md') get mdClass() {
        return this.size === IconSizes.MD;
    }
    @HostBinding('class.apto-icon--lg') get lgClass() {
        return this.size === IconSizes.LG;
    }
    @HostBinding('class.apto-icon--xl') get xlClass() {
        return this.size === IconSizes.XL;
    }

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
                this._elementRef.nativeElement.classList.remove(`apto-icon--${this.icon}`);
                this._clearSvgElement();
            }
        }
        if (changes.label) {
            this._elementRef.nativeElement.setAttribute('aria-label', this.label);
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
        this._elementRef.nativeElement.classList.add(`apto-icon--${this.icon}`);
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
