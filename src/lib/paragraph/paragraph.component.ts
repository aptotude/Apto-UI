import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'apto-paragraph',
    templateUrl: 'paragraph.html',
    styleUrls: ['./paragraph.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoParagraphComponent {
    @Input() public compact = false;
}
