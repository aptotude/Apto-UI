import { Component, Input, Output, EventEmitter } from "@angular/core";

export enum ButtonKinds {
  Primary = "primary",
  Secondary = "secondary"
}

export enum ButtonTypes {
  Button = "button",
  Link = "link"
}

@Component({
  selector: "apto-button",
  templateUrl: "button.html",
  styleUrls: [ "./apto-button.scss" ]
})
export class AptoButton {
  @Input() public active = true;
  @Input() public kind: ButtonKinds = ButtonKinds.Primary;
  @Input() public text = "";
  @Input() public title = "";
  @Input() public type: ButtonTypes = ButtonTypes.Button;

  @Output() public onClick = new EventEmitter();
  @Output() public onMouseOut = new EventEmitter();
  @Output() public onMouseOver = new EventEmitter();

  public classes() {
    return `apto-button apto-button--${this.type} apto-button--${this.kind}`;
  }
}
