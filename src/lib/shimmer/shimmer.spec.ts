import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoShimmerComponentModule } from './shimmer.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-shimmer></apto-shimmer>
    `
})
class TestComponent {}

describe('apto-shimmer', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoShimmerComponentModule ],
            declarations: [ TestComponent ]
        });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it('should have loader class', () => {
        const el = fixture.nativeElement.querySelector('apto-shimmer');
        expect(el.className).toBe('AptoShimmer');
    });
});
