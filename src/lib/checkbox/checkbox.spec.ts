import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoCheckboxComponent } from './checkbox.component';
import { AptoCheckboxComponentModule } from './checkbox.module';

@Component({
    selector: 'apto-test-app',
    template: `
        <apto-checkbox
            [checked]="checked"
            [required]="required"
            [disabled]="disabled"
            [value]="value"
            [name]="name"
            [id]="id"
            [aria-label]="ariaLabel"
            [aria-labelledby]="ariaLabelledby"
            [tabindex]="tabindex"></apto-checkbox>
    `
})
class TestComponent {
    checked = false;
    required = false;
    disabled = false;
    value = null;
    name = null;
    id = null;
    ariaLabel = null;
    ariaLabelledby = null;
    tabindex = null;
}

describe('apto-checkbox', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: AptoCheckboxComponent;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoCheckboxComponentModule ],
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
        it('has the correct base class name', () => {
            const el = fixture.nativeElement.querySelector('apto-checkbox');
            expect(el.className).toBe('AptoCheckbox');
        });

        it('has disabled class name', () => {
            testComponent.disabled = true;
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('apto-checkbox');
            expect(el.className).toContain('AptoCheckbox--disabled');
        });

        it('has checked class name', () => {
            testComponent.checked = true;
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('apto-checkbox');
            expect(el.className).toContain('AptoCheckbox--checked');
        });
    });

    describe('aria', () => {
        it('should have arai-label', () => {
            testComponent.ariaLabel = 'labeled';
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('input');
            expect(el.getAttribute('aria-label')).toEqual('labeled');
        });

        it('should have aria-labelledby', () => {
            testComponent.ariaLabelledby = 'labelledby';
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('input');
            expect(el.getAttribute('aria-labelledby')).toEqual('labelledby');
        });

        it('should have aria-checked true', () => {
            testComponent.checked = true;
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('input');
            expect(el.getAttribute('aria-checked')).toEqual('true');
        });

        it('should have aria-checked false', () => {
            testComponent.checked = false;
            fixture.detectChanges();
            const el = fixture.nativeElement.querySelector('input');
            expect(el.getAttribute('aria-checked')).toEqual('false');
        });
    });
});
