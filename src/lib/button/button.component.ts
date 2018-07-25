import { Component, Input, Output, EventEmitter } from '@angular/core';

export enum ButtonKinds {
    Primary = 'primary',
    Secondary = 'secondary'
}

export enum ButtonTypes {
    Button = 'button',
    Link = 'link'
}

@Component({
    selector: 'apto-button',
    templateUrl: 'button.html',
    styleUrls: [ './apto-button.scss' ]
})
export class AptoButtonComponent {
    @Input() public active = true;
    @Input() public kind: ButtonKinds = ButtonKinds.Primary;
    @Input() public text = '';
    @Input() public title = '';
    @Input() public type: ButtonTypes = ButtonTypes.Button;

    @Output() public click = new EventEmitter();
    @Output() public mouseOut = new EventEmitter();
    @Output() public mouseOver = new EventEmitter();

    public clickHandler(e: any): void {
        if (this.active) {
            this.click.emit(e);
        }
    }

    public classes(): string {
        return `apto-button apto-button--${this.type} apto-button--${this.kind}`;
    }
}