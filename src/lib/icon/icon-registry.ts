import { DOCUMENT } from '@angular/common';
import {
    Inject,
    Injectable,
    Optional
} from '@angular/core';
import { ICON_SVGS } from './icon-set';

class SvgIconConfig {
    svgElement: SVGElement | null;
    constructor(data: SVGElement) {
        this.svgElement = data as SVGElement;
    }
}

@Injectable()
export class AptoIconRegistry {
    private _document: Document;
    private _svgIconCache = new Map<string, SvgIconConfig>();

    constructor(@Optional() @Inject(DOCUMENT) document: any) {
        this._document = document;
    }

    public getSvgIconByName(name): SVGElement  {
        const config = this._svgIconCache.get(name);

        if (config) {
            return this._getIconFromCache(config);
        }

        return this._addIconCache(name);
    }

    private _addIconCache(name: string): SVGElement {
        const svg = this._svgElementFromString(ICON_SVGS[name]);
        this._setIconAttributes(svg);

        const config = new SvgIconConfig(svg);

        this._svgIconCache.set(name, config);

        return this._getIconFromCache(config);
    }

    private _getIconFromCache(cache: SvgIconConfig): SVGElement {
        return cloneSvg(cache.svgElement);
    }

    private _setIconAttributes(svg: SVGElement): SVGElement {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false');
        return svg;
    }

    private _svgElementFromString(str: string): SVGElement {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg') as SVGElement;

        if (!svg) {
          throw Error('<svg> tag not found');
        }

        return svg;
    }
}

function cloneSvg(svg: SVGElement): SVGElement {
    return svg.cloneNode(true) as SVGElement;
}
