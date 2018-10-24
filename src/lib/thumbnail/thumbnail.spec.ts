import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoThumbnailComponentModule } from './thumbnail.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-thumbnail>
            <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
            AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
                9TXL0Y4OHwAAAABJRU5ErkJggg==">
        </apto-thumbnail>
    `
})
class TestComponent {}

describe('apto-thumbnail', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoThumbnailComponentModule ],
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

    it('should have class', () => {
        const el = fixture.nativeElement.querySelector('apto-thumbnail');
        expect(el.className).toBe('AptoThumbnail');
    });

    it('should have img', () => {
        const el = fixture.nativeElement.querySelector('img');
        expect(el).not.toBe(null);
    });
});
