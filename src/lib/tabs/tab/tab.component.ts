import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

@Directive({
    selector: '[aptoTabContent]'
})
export class AptoTabContentDirective {
    constructor(public templateRef: TemplateRef<any>) {

    }
}

@Directive({
    selector: '[aptoTabLabel]'
})
export class AptoTabLabelDirective {
    constructor(public templateRef: TemplateRef<any>) {

    }
}

@Component({
    selector: 'apto-tab',
    templateUrl: 'tab.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AptoTabComponent implements OnInit {
    @Input() public label = '';
    @ContentChild(AptoTabLabelDirective) private templateLabel: AptoTabLabelDirective;
    @ViewChild(TemplateRef) private implicitContent: TemplateRef<any>;
    @ContentChild(AptoTabContentDirective, {
        read: TemplateRef
    }) private explicitContent: AptoTabContentDirective;

    public contentRef: TemplateRef<any> | AptoTabContentDirective | null = null;
    public active = false;

    ngOnInit() {
        this.contentRef = this.explicitContent || this.implicitContent;
    }
}
