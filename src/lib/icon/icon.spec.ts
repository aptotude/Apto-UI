import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoIconComponentModule } from './icon.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-paragraph>Text Here</apto-paragraph>
    `
})
class TestComponent {

}

describe('apto-paragraph', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoIconComponentModule ],
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

    describe('classes', () => {
        it('should set ng-content', () => {
            const p = fixture.nativeElement.querySelector('p');
            expect(p.innerText.includes('Text Here')).toBe(true);
        });

        it('should have class', () => {
            const p = fixture.nativeElement.querySelector('p');
            expect(p.className).toBe('apto-paragraph');
        });
    });
});
