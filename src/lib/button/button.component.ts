import { Component, Input } from '@angular/core';

export enum ButtonKinds {
    Primary = 'primary',
    Secondary = 'secondary',
    SecondaryDark = 'secondaryDark'
}

export enum ButtonTypes {
    Button = 'button',
    Link = 'link'
}

@Component({
    selector: 'apto-button',
    templateUrl: 'button.html',
    styleUrls: ['./button.scss']
})
export class AptoButtonComponent {
    @Input() public disabled = false;
    @Input() public kind: ButtonKinds = ButtonKinds.Primary;
    @Input() public title = '';
    @Input() public type: ButtonTypes = ButtonTypes.Button;
    @Input() public automation: string = null;

    public clickHandler(event: Event): void {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    public classes(): string {
        return `apto-button apto-button--${this.type || ButtonTypes.Button} apto-button--${this.kind || ButtonKinds.Primary}`;
    }
}
