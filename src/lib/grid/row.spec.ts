import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoGridComponentModule } from './grid.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-row>
            <apto-col [xs]="xsCol" [sm]="smCol" [md]="mdCol" [lg]="lgCol" [xl]="xlCol">HI</apto-col>
        </apto-row>
        <apto-row noGutter data-no-gutter>
            <apto-col [xs]="xsCol" [sm]="smCol" [md]="mdCol" [lg]="lgCol" [xl]="xlCol">HI</apto-col>
        </apto-row>
    `
})
class TestComponent {
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

    afterEach(() => {
        fixture.destroy();
    });

    describe('Gutter', () => {
        it ('should have gutter', () => {
            const el = fixture.nativeElement.querySelector('apto-row');
            expect(el.className).toEqual('AptoRow');
        });

        it ('should not have gutter', () => {
            const el = fixture.nativeElement.querySelector('apto-row[data-no-gutter]');
            expect(el.classList.contains('AptoRow')).toEqual(true);
            expect(el.classList.contains('AptoRow--noGutter')).toEqual(true);
        });
    });

    describe('ng-content', () => {
        it('should have content', () => {
            const el = fixture.nativeElement.querySelector('apto-col');
            expect(el.innerText).toEqual('HI');
        });
    });

    describe('Columns', () => {
        describe('xs', () => {
            it('should have apto-col by default', () => {
                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol');
            });

            it('should have auto width column', () => {
                testComponent.xsCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-auto');
            });

            it('should have numbered col', () => {
                testComponent.xsCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-6');
            });

            it('should have auto size', () => {
                testComponent.xsCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol');
            });
        });

        describe('sm', () => {
            it('should have auto width column', () => {
                testComponent.smCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-sm-auto');
            });

            it('should have numbered col', () => {
                testComponent.smCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-sm-6');
            });

            it('should have auto size', () => {
                testComponent.smCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-sm');
            });
        });

        describe('md', () => {
            it('should have auto width column', () => {
                testComponent.mdCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-md-auto');
            });

            it('should have numbered col', () => {
                testComponent.mdCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-md-6');
            });

            it('should have auto size', () => {
                testComponent.mdCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-md');
            });
        });

        describe('lg', () => {
            it('should have auto width column', () => {
                testComponent.lgCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-lg-auto');
            });

            it('should have numbered col', () => {
                testComponent.lgCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-lg-6');
            });

            it('should have auto size', () => {
                testComponent.lgCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-lg');
            });
        });

        describe('xl', () => {
            it('should have auto width column', () => {
                testComponent.xlCol = 'auto';
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-xl-auto');
            });

            it('should have numbered col', () => {
                testComponent.xlCol = 6;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-xl-6');
            });

            it('should have auto size', () => {
                testComponent.xlCol = true;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-xl');
            });
        });

        describe('mixed', () => {
            it('should have md and xl column classes', () => {
                testComponent.xlCol = 6;
                testComponent.mdCol = 4;
                fixture.detectChanges();

                const el = fixture.nativeElement.querySelector('apto-col');
                expect(el.className).toEqual('AptoCol-md-4 AptoCol-xl-6');
            });
        });
    });
});
