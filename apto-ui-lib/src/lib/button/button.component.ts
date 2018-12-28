import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ElementRef,
    Directive,
    HostListener,
    Renderer2,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { coerceBooleanProperty } from '../utils';

export enum ButtonKinds {
    Primary = 'primary',
    Secondary = 'secondary',
    SecondaryDark = 'secondaryDark',
    Danger = 'danger'
}

export enum ButtonTypes {
    Button = 'button',
    Link = 'link'
}

@Directive({
    selector: 'apto-button[holdButton]'
})
export class AptoHoldButtonDirective implements AfterViewInit {
    @Output() readonly hold: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();
    private timer: any = null;
    private progressContainer: HTMLSpanElement;
    private progressBar: HTMLSpanElement;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) {
        this.progressContainer = this.renderer.createElement('span');
        this.renderer.addClass(this.progressContainer, 'AptoHold');
        this.progressBar = this.renderer.createElement('span');
        this.renderer.addClass(this.progressBar, 'AptoHold-progressBar');
        this.renderer.appendChild(this.progressContainer, this.progressBar);
    }

    @HostListener('mousedown') public _onMouseDown(): void {
        this.startHold();
    }

    @HostListener('mouseup') public _onMouseUp(): void {
        this.cancelTimer();
    }

    @HostListener('mouseleave') public _onLeave(): void {
        this.cancelTimer();
    }

    public startHold() {
        if (this.progressContainer) {
            this.progressContainer.classList.add('AptoHold--active');
            this.timer = setTimeout(() => {
                this.hold.emit(this.element);
                this.cancelTimer();
            }, 2000);
        }
    }

    public ngAfterViewInit(): void {
        const el: any = this.element.nativeElement.querySelector('button');
        if (el && !el.hasAttribute('disabled')) {
            this.renderer.appendChild(
                el, this.progressContainer
            );
        }
        this.cancelTimer();
    }

    private cancelTimer(): void {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.progressContainer) {
            this.progressContainer.classList.remove('AptoHold--active');
        }
    }
}

@Component({
    selector: 'apto-button',
    templateUrl: 'button.html',
    styleUrls: ['./button.scss'],
    host: {
        '[attr.disabled]': 'null',
        '[attr.kind]': 'null',
        '[attr.type]': 'null',
        '[attr.title]': 'null'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoButtonComponent {
    private _disabled = false;

    @Input()
        public get disabled(): boolean {
            return this._disabled;
        }
        public set disabled(value: boolean) {
            if (value !== this.disabled) {
                this._disabled = coerceBooleanProperty(value);
                this._changeDetectorRef.markForCheck();
            }
        }
    @Input() public kind: ButtonKinds = ButtonKinds.Primary;
    @Input() public title: string|null = null;
    @Input() public type: ButtonTypes = ButtonTypes.Button;
    @Input() public automation: string|null = null;

    constructor(private _changeDetectorRef: ChangeDetectorRef) {}

    public _clickHandler(event: Event): void {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    public classes(): string {
        return `AptoButton AptoButton--${this.type || ButtonTypes.Button} AptoButton--${this.kind || ButtonKinds.Primary}`;
    }
}
