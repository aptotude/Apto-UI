import {
    AfterContentChecked,
    Component,
    ContentChildren,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    QueryList,
    Input,
    Output,
    ChangeDetectorRef,
    EventEmitter
} from '@angular/core';
import {
    AptoTabComponent
} from './tab.component';
import { HOME, END, RIGHT_ARROW, LEFT_ARROW } from '../utils/keycodes';

let nextId = 0;

export class AptoTabChangeEvent {
    index: number;
    tab: AptoTabComponent;
}

@Component({
    selector: 'apto-tab-group',
    templateUrl: './tab-group.html',
    styleUrls: ['./tab-group.scss'],
    host: {'class': 'apto-tab-group'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoTabGroupComponent implements AfterContentChecked {
    private _groupId: number;
    private _selectedIndex: number | null = null;
    private _indexToSelect: number | null = 0;

    @Input()
        get selectedIndex(): number | null {
            return this._selectedIndex;
        }
        set selectedIndex(value: number | null) {
            this._indexToSelect = Number(value);
        }
    @Input()
        get groupId(): number {
            return this._groupId;
        }
    @Output() readonly selectedTabChange: EventEmitter<AptoTabChangeEvent> =
        new EventEmitter<AptoTabChangeEvent>(true);

    @ContentChildren(AptoTabComponent) public tabs: QueryList<AptoTabComponent>;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {
        this._groupId = nextId++;
    }

    public handleClick(e: Event, tab: AptoTabComponent, tabNum: number): void {
        e.preventDefault();
        this.selectedIndex = tabNum;
    }

    public getAriaLabelledby(i: number): string {
        return `apto-tab-nav-${this._groupId}-${i}`;
    }

    public getTabPaneId(i: number): string {
        return `apto-tab-pane-${this._groupId}-${i}`;
    }

    public getTabNavId(i: number): string {
        return `apto-tab-nav-${this._groupId}-${i}`;
    }

    public getTabNavPaneId(i: number): string {
        return `#apto-tab-pane-${this._groupId}-${i}`;
    }

    public keyDownHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case HOME:
                this._setFirstItemActive();
                event.preventDefault();
                break;
            case END:
                this._setLastItemActive();
                event.preventDefault();
                break;
            case RIGHT_ARROW:
                this._setNextItemActive();
                event.preventDefault();
                break;
            case LEFT_ARROW:
                this._setPreviousItemActive();
                event.preventDefault();
                break;
            default:
        }
    }

    private _createChangeEvent(index: number): AptoTabChangeEvent {
        const event = new AptoTabChangeEvent;
        event.index = index;

        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
        }

        return event;
    }

    private _setFirstItemActive(): void {
        this.selectedIndex = 0;
    }

    private _setNextItemActive(): void {
        this.selectedIndex += 1;
        if (this.selectedIndex >= this.tabs.length - 1) {
            this._setFirstItemActive();
        }
    }

    private _setPreviousItemActive(): void {
        this.selectedIndex -= 1;
        if (this.selectedIndex <= 0) {
            this._setLastItemActive();
        }
    }

    private _setLastItemActive(): void {
        this.selectedIndex = this.tabs.length - 1;
    }

    ngAfterContentChecked() {
        const _indexToSelect = this._indexToSelect =
            Math.min(this.tabs.length - 1, Math.max(this._indexToSelect || 0, 0));

        if (this._selectedIndex !== _indexToSelect && this._selectedIndex !== null) {
            this.selectedTabChange.emit(
                this._createChangeEvent(_indexToSelect)
            );
        }

        this.tabs.forEach((tab: AptoTabComponent, index: number) => {
            tab.active = index === _indexToSelect;
        });

        if (this._selectedIndex !== _indexToSelect) {
            this._selectedIndex = _indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }
}
