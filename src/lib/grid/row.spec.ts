import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoGridComponentModule } from './grid.module';
import { AptoGridRowComponent } from './row.component';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-row class="no-gutter" [gutter]="hasGutter">
            <apto-col [xs]="xsCol" [sm]="smCol" [md]="mdCol" [lg]="lgCol" [xl]="xlCol">HI</apto-col>
        </apto-row>
    `
})
class TestComponent {
    hasGutter = true;
    xsCol = null;
    smCol = null;
    mdCol = null;
    lgCol = null;
    xlCol = null;
}

describe('apto-row', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
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

    describe('Gutter', () => {
        it ('should have gutter', () => {
            const el = fixture.nativeElement.querySelector('apto-row');
            expect(el.classList.contains('apto-row')).toEqual(true);
            expect(el.classList.contains('apto-row--no-gutter')).toEqual(false);
        });

        it ('should not have gutter', () => {
            testComponent.hasGutter = false;
            fixture.detectChanges();

            const el = fixture.nativeElement.querySelector('apto-row');
            expect(el.classList.contains('apto-row')).toEqual(true);
            expect(el.classList.contains('apto-row--no-gutter')).toEqual(true);
        });
    });

    describe('ng-content', () => {
        it('should have content', () => {
            const el = fixture.nativeElement.querySelector('apto-col');
            expect(el.innerText).toEqual('HI');
        });
    });

    describe('Columns', () => {
        describe('bad col data', () => {
            it('should have nothing', () => {
                const el = fixture.nativeElement.querySelector('apto-col');
                testComponent.smCol = 'cats';
                fixture.detectChanges();
                expect(el.className).toEqual('');
            });
        });

        describe('xs', () => {
            it('should have apto-col by default', () => {
                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col');
            });

            it('should have auto width column', () => {
                testComponent.xsCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-auto');
            });

            it('should have numbered col', () => {
                testComponent.xsCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-6');
            });

            it('should have auto size', () => {
                testComponent.xsCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col');
            });
        });

        describe('sm', () => {
            it('should have auto width column', () => {
                testComponent.smCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-sm-auto');
            });

            it('should have numbered col', () => {
                testComponent.smCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-sm-6');
            });

            it('should have auto size', () => {
                testComponent.smCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-sm');
            });
        });

        describe('md', () => {
            it('should have auto width column', () => {
                testComponent.mdCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-md-auto');
            });

            it('should have numbered col', () => {
                testComponent.mdCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-md-6');
            });

            it('should have auto size', () => {
                testComponent.mdCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-md');
            });
        });

        describe('lg', () => {
            it('should have auto width column', () => {
                testComponent.lgCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-lg-auto');
            });

            it('should have numbered col', () => {
                testComponent.lgCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-lg-6');
            });

            it('should have auto size', () => {
                testComponent.lgCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-lg');
            });
        });

        describe('xl', () => {
            it('should have auto width column', () => {
                testComponent.xlCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-xl-auto');
            });

            it('should have numbered col', () => {
                testComponent.xlCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-xl-6');
            });

            it('should have auto size', () => {
                testComponent.xlCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-xl');
            });
        });

        describe('mixed', () => {
            it('should have md and xl column classes', () => {
                testComponent.xlCol = 6;
                testComponent.mdCol = 4;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('apto-col-md-4 apto-col-xl-6');
            });
        });
    });
});
