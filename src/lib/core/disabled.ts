import {Constructor} from './constructor';
import { coerceBooleanProperty } from '../utils';

export interface CanDisable {
    disabled: boolean;
}

export function mixinDisabled<T extends Constructor<{}>>(base: T): Constructor<CanDisable> & T {
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
