import {
    Component,
    Input,
    ViewChild,
    EventEmitter,
    Directive,
    Inject,
    OnInit,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: 'apto-tooltip-content'
})
export class AptoTooltipContentDirective {}

@Directive({
    selector: 'apto-tooltip-trigger'
})
export class AptoTooltipTriggerDirective {}

let nextAptoTooltipId = 0;

@Component({
    selector: 'apto-tooltip',
    templateUrl: 'tooltip.html',
    styleUrls: ['./tooltip.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoTooltipComponent implements OnInit, OnDestroy {
    @Input() public hoverDelay = 200;
    @ViewChild('tooltipContent') public tip;
    @ViewChild('tooltipTrigger') public trigger;

    public onItemHover = new EventEmitter();
    public onItemLeave = new EventEmitter();
    public visible = true;
    public built = false;
    public tipId: string;
    private _subscriptions: Subscription[] = [];

    constructor(@Inject(DOCUMENT) private _doc: any) {
        this.tipId = 'AptoTooltip--' + nextAptoTooltipId++;
    }

    public ngOnInit(): void {
        let timeout: any;
        this._subscriptions.push(
            this.onItemHover.subscribe(() => {
                this.visible = true;
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    this.hoverHandler();
                }, this.hoverDelay);
            })
        );

        this._subscriptions.push(
            this.onItemLeave.subscribe(() => {
                if (timeout) {
                    clearTimeout(timeout);
                }
                this.leaveHandler();
            })
        );
    }

    public ngOnDestroy(): void {
        this._subscriptions.forEach((s) => s.unsubscribe());
    }

    public buildElement(): void {
        if (this.built) {
            return;
        }
        this.trigger.nativeElement.setAttribute('id', this.tipId);
        this.tip.nativeElement.setAttribute('aria-describedby', this.tipId);
        this._doc.body.appendChild(this.tip.nativeElement);
        this.built = true;
    }

    public clickHandler(): void {
        this.hoverHandler();
    }

    public hoverHandler(): void {
        if (!this.built) {
            this.buildElement();
        }

        if (!this.visible) {
            return;
        }

        this.tip.nativeElement.removeAttribute('hidden');
        const handleBounds = this.trigger.nativeElement.getBoundingClientRect();
        const tipBounds = this.tip.nativeElement.getBoundingClientRect();
        const x = (handleBounds.x + (handleBounds.width / 2)) - (tipBounds.width / 2);
        const y = handleBounds.y + handleBounds.height;
        const position = `translate3d(${x}px,${y}px,0)`;
        this.tip.nativeElement.style.transform = position;
    }

    public leaveHandler(): void {
        this.visible = false;
        if (this.built) {
            this.tip.nativeElement.setAttribute('hidden', 'hidden');
        }
    }
}
