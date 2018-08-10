import {
    AfterContentChecked,
    Component,
    ContentChildren,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    QueryList,
    Input,
    AfterContentInit,
    Output,
    ChangeDetectorRef,
    EventEmitter,
    OnDestroy
} from '@angular/core';
import {
    AptoTabComponent
} from '../tab/tab.component';
import { HOME, END, RIGHT_ARROW, LEFT_ARROW } from '../../utils/keycodes';

import { Subscription } from 'rxjs/Subscription';

let nextId = 0;

export class AptoTabChangeEvent {
    index: number;
    tab: AptoTabComponent;
}

@Component({
    selector: 'apto-tab-group',
    templateUrl: './tab-group.html',
    styleUrls: [ './tab-group.scss' ],
    host: {'class': 'apto-tab-group'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoTabGroupComponent implements AfterContentInit, AfterContentChecked, OnDestroy {
    public _groupId: number;
    private _selectedIndex: number | null = null;
    private _indexToSelect: number | null = 0;
    private tabsSubscription = Subscription.EMPTY;

    @Input()
        get selectedIndex(): number | null {
            return this._selectedIndex;
        }
        set selectedIndex(value: number | null) {
            this._indexToSelect = value;
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

    public setFirstItemActive(): void {
        this.selectedIndex = 0;
    }

    public setNextItemActive(): void {
        this.selectedIndex += 1;
        if (this.selectedIndex >= this.tabs.length - 1) {
            this.setFirstItemActive();
        }
    }

    public setPreviousItemActive(): void {
        this.selectedIndex -= 1;
        if (this.selectedIndex <= 0) {
            this.setLastItemActive();
        }
    }

    public setLastItemActive(): void {
        const tab: AptoTabComponent = this.tabs.last;
        this.selectedIndex = tab.position;
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
                this.setFirstItemActive();
                event.preventDefault();
                break;
            case END:
                this.setLastItemActive();
                event.preventDefault();
                break;
            case RIGHT_ARROW:
                this.setNextItemActive();
                event.preventDefault();
                break;
            case LEFT_ARROW:
                this.setPreviousItemActive();
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

    ngAfterContentChecked() {
        const indexToSelect = this._indexToSelect =
            Math.min(this.tabs.length - 1, Math.max(this._indexToSelect || 0, 0));

        if (this._selectedIndex !== indexToSelect && this._selectedIndex !== null) {
            const tabChangeEvent = this._createChangeEvent(indexToSelect);
            this.selectedTabChange.emit(tabChangeEvent);
        }

        this.tabs.forEach((tab: AptoTabComponent, index: number) => {
            tab.position = index - indexToSelect;
            tab.active = index === indexToSelect;
        });

        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }

    ngAfterContentInit() {
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const tabs = this.tabs.toArray();
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].active) {
                    this._indexToSelect = this._selectedIndex = i;
                    break;
                }
            }
        });

        this._changeDetectorRef.markForCheck();
    }

    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
    }
}
