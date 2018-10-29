import {Constructor} from './constructor';
import { coerceBooleanProperty } from '../utils';

export interface CanDisable {
    disabled: boolean;
}

export type CanDisableCtor = Constructor<CanDisable>;

export function mixinDisabled<T extends Constructor<{}>>(base: T): CanDisableCtor & T {
    return class extends base {
        private _disabled = false;

        public get disabled() {
            return this._disabled;
        }

        public set disabled(value: any) {
            this._disabled = coerceBooleanProperty(value);
        }

        constructor(...args: any[]) {
            super(...args);
        }
    };
}
