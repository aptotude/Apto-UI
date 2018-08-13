import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoLoaderComponentModule } from './loader.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-loader [text]="loadText"></apto-loader>
        <apto-loader noOverlay data-no-overlay></apto-loader>
    `
})
class TestComponent {
    loadText = null;
}

describe('apto-loader', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoLoaderComponentModule ],
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

    it('should set loader text', () => {
        testComponent.loadText = 'Loading';
        fixture.detectChanges();

        const el = fixture.nativeElement.querySelector('apto-loader .apto-loader--content');
        expect(el.innerText.includes('Loading')).toBe(true);
    });

    it('should not set loader text', () => {
        testComponent.loadText = null;
        fixture.detectChanges();

        const el = fixture.nativeElement.querySelector('apto-loader .apto-loader--content');
        expect(el).toBe(null);
    });

    it('should have loader class', () => {
        const el = fixture.nativeElement.querySelector('apto-loader');
        expect(el.className).toBe('apto-loader');
    });

    it('should have no overlay loader class', () => {
        const el = fixture.nativeElement.querySelector('apto-loader[data-no-overlay]');
        expect(el.className).toBe('apto-loader apto-loader--no-overlay');
    });
});
