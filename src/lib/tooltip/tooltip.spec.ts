import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoTooltipComponentModule } from './tooltip.module';
import { AptoTooltipComponent } from './tooltip.component';

@Component({
    selector: 'apto-test-app',
    template: `<apto-tooltip>
        <apto-tooltip-trigger>i am the trigger</apto-tooltip-trigger>
        <apto-tooltip-content>i am the content</apto-tooltip-content>
    </apto-tooltip>`
})
class TestComponent {
    clickCount = 0;
    hoverCount = 0;
}

describe('apto-tooltip', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: AptoTooltipComponent;

    const isOpen = (tipElement) => {
        expect(testComponent.visible).toEqual(true);
        expect(tipElement.style.transform).toContain('translate3d(');
        expect(tipElement.getAttribute('hidden')).toEqual(null);
    };

    const isClosed = (tipElement) => {
        expect(testComponent.visible).toEqual(false);
        expect(tipElement.getAttribute('hidden')).toEqual('hidden');
    };

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoTooltipComponentModule ],
            declarations: [ TestComponent ]
        });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should build dom', () => {
        testComponent.buildElement();
        const tipElement = testComponent.tip.nativeElement;
        const triggerElement = testComponent.trigger.nativeElement;

        expect(tipElement.getAttribute('role')).toEqual('tooltip');
        expect(tipElement.getAttribute('hidden')).toEqual('hidden');
        expect(tipElement.getAttribute('aria-describedby')).toEqual(testComponent.tipId);
        expect(tipElement.className).toEqual('AptoTooltip');
        expect(tipElement.innerText).toContain('i am the content');

        expect(triggerElement.getAttribute('id')).toEqual(testComponent.tipId);
        expect(triggerElement.innerText).toContain('i am the trigger');
        expect(testComponent.built).toEqual(true);
    });

    it('should open on click', () => {
        testComponent.trigger.nativeElement.dispatchEvent(new Event('click'));
        const tipElement = testComponent.tip.nativeElement;
        isOpen(tipElement);
    });

    it('should open on mousover', async () => {
        testComponent.trigger.nativeElement.dispatchEvent(new Event('mouseenter'));

        await new Promise((resolve) => { setTimeout(resolve, 300); });

        const tipElement = testComponent.tip.nativeElement;
        isOpen(tipElement);
    });

    it('should call leave on mouseout', () => {
        testComponent.hoverHandler();

        const tipElement = testComponent.tip.nativeElement;
        isOpen(tipElement);

        testComponent.trigger.nativeElement.dispatchEvent(new Event('mouseleave'));

        isClosed(tipElement);
    });
});
