import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoGridComponentModule } from './grid.module';
@Component({
    selector: 'apto-test-app',
    template: `
        <apto-container>
            <apto-row>
                <apto-col>HI</apto-col>
            </apto-row>
        </apto-container>
        <apto-container data-fixed-version fixed>
            <apto-row>
                <apto-col>HI</apto-col>
            </apto-row>
        </apto-container>
        <apto-container data-scroll-version scroll>
            <apto-row>
                <apto-col>HI</apto-col>
            </apto-row>
        </apto-container>
    `
})
class TestComponent {

}

describe('apto-container', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoGridComponentModule ],
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

    describe('Fix/Fluid', () => {
        it ('should be fluid', () => {
            const el = fixture.nativeElement.querySelector('apto-container');
            expect(el.className).toEqual('apto-container');
        });
        it ('should not be fixed', () => {
            const el = fixture.nativeElement.querySelector('apto-container[data-fixed-version]');
            expect(el.className).toEqual('apto-container apto-container--fixed');
        });
    });

    describe('Scrollable', () => {
        it ('should not be scrollable', () => {
            const el = fixture.nativeElement.querySelector('apto-container');
            expect(el.className).toEqual('apto-container');
        });
        it ('should not be scrollable', () => {
            const el = fixture.nativeElement.querySelector('apto-container[data-scroll-version]');
            expect(el.className).toEqual('apto-container apto-container--scroll');
        });
    });

    describe('ng-content', () => {
        it ('should render content', () => {
            const el = fixture.nativeElement.innerText;
            const row = fixture.nativeElement.querySelector('apto-row');
            const col = fixture.nativeElement.querySelector('apto-col');

            expect(el).toContain('HI');
            expect(row).not.toEqual(null);
            expect(col).not.toEqual(null);
        });
    });
});
