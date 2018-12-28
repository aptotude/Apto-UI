import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoHelpTextComponentModule } from './help-text.module';
import { sortedClassNames } from '../utils/sorted-classname';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-help-text>
            help.
        </apto-help-text>
        <apto-help-text [error]="true" data-item="error">
            help error.
        </apto-help-text>
        <apto-help-text inline data-item="inline">
            help inline.
        </apto-help-text>
        <apto-help-text inline [error]="true" data-item="inline-error">
            help inline.
        </apto-help-text>
    `
})
class TestComponent {}

describe('apto-help-text', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoHelpTextComponentModule ],
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

    it('should have component class', () => {
        const el = fixture.nativeElement.querySelector('apto-help-text');
        expect(sortedClassNames(el)).toEqual(['AptoHelpText']);
    });

    it('should render text', () => {
        const el: HTMLElement = fixture.nativeElement.querySelector('apto-help-text');
        expect(el.textContent).toContain('help.');
    });

    it('should have error class', () => {
        const el = fixture.nativeElement.querySelector('[data-item="error"]');
        expect(sortedClassNames(el)).toEqual(['AptoHelpText', 'AptoHelpText--error']);
    });

    it('should have inline class', () => {
        const el = fixture.nativeElement.querySelector('[data-item="inline"]');
        expect(sortedClassNames(el)).toEqual(['AptoHelpText', 'AptoHelpText--inline']);
    });

    it('should have inline and error class', () => {
        const el = fixture.nativeElement.querySelector('[data-item="inline-error"]');
        expect(sortedClassNames(el)).toEqual(['AptoHelpText', 'AptoHelpText--error', 'AptoHelpText--inline']);
    });
});
