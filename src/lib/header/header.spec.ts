import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoHeaderComponentModule } from './header.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-header [type]="headingType">Heading</apto-header>
    `
})
class TestComponent {
    headingType = 1;
}

describe('apto-header', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoHeaderComponentModule ],
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
            const heading = fixture.nativeElement.querySelector('.apto-header');
            expect(heading.innerText.includes('HEADING')).toBe(true);
        });

        it('should be h1', () => {
            const heading = fixture.nativeElement.querySelector('.apto-header');
            expect(heading.className).toBe('apto-header apto-header--h1');
        });

        it('should be h2', () => {
            testComponent.headingType = 2;
            fixture.detectChanges();
            const heading = fixture.nativeElement.querySelector('h2');
            expect(heading.className).toBe('apto-header apto-header--h2');
        });

        it('should be h3', () => {
            testComponent.headingType = 3;
            fixture.detectChanges();
            const heading = fixture.nativeElement.querySelector('h3');
            expect(heading.className).toBe('apto-header apto-header--h3');
        });

        it('should be h4', () => {
            testComponent.headingType = 4;
            fixture.detectChanges();
            const heading = fixture.nativeElement.querySelector('h4');
            expect(heading.className).toBe('apto-header apto-header--h4');
        });

        it('should be h5', () => {
            testComponent.headingType = 5;
            fixture.detectChanges();
            const heading = fixture.nativeElement.querySelector('h5');
            expect(heading.className).toBe('apto-header apto-header--h5');
        });

        it('should be h6', () => {
            testComponent.headingType = 6;
            fixture.detectChanges();
            const heading = fixture.nativeElement.querySelector('h6');
            expect(heading.className).toBe('apto-header apto-header--h6');
        });
    });
});
