import {Constructor} from './constructor';
import {CanDisable} from './disabled';

export interface HasTabIndex {
    tabIndex: number;
}

export type HasTabIndexCtor = Constructor<HasTabIndex>;

export function mixinTabIndex<T extends Constructor<CanDisable>>(base: T, defaultTabIndex = 0)
    : HasTabIndexCtor & T {
    return class extends base {
        private _tabIndex: number = defaultTabIndex;

        public get tabIndex(): number {
            return this.disabled ? -1 : this._tabIndex;
        }
        public set tabIndex(value: number) {
            this._tabIndex = value != null ? value : defaultTabIndex;
        }

        constructor(...args: any[]) {
            super(...args);
        }
    };
}
