import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button';


@Component({
    selector: 'apto-test-app',
    template: `
    <apto-card automation="nice">
        <apto-card-header>Header</apto-card-header>
        I am Content
        <apto-card-footer>
            <apto-card-footer-left>
                <apto-button kind="primary" type="link">Footer left</apto-button>
            </apto-card-footer-left>
            <apto-card-footer-right>
                <apto-button kind="primary" type="link">Footer right</apto-button>
            </apto-card-footer-right>
        </apto-card-footer>
    </apto-card>`
})
class TestComponent {
}

describe('apto-card', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoCardComponentModule, AptoButtonComponentModule ],
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
            const card = fixture.nativeElement.querySelector('apto-card');
            expect(card.className.includes('apto-card')).toBe(true);
        });

        it('has the correct header class name', () => {
            const cardHeader = fixture.nativeElement.querySelector('apto-card apto-card-header');

            expect(cardHeader.className.includes('apto-card--header')).toBe(true);
        });

        it('has the correct footer class names', () => {
            const cardFooter = fixture.nativeElement.querySelector('apto-card apto-card-footer');
            const cardFooterRight = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-right');
            const cardFooterLeft = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-left');

            expect(cardFooter.className).toBe('apto-card--footer');
            expect(cardFooterRight.className).toBe('apto-card--footer-right');
            expect(cardFooterLeft.className).toBe('apto-card--footer-left');
        });
    });

    describe('text', () => {
        it('shows content when text is passed', () => {
            const cardHeader = fixture.nativeElement.querySelector('apto-card apto-card-header');
            const cardContent = fixture.nativeElement.querySelector('apto-card');
            const cardFooterRight = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-right');
            const cardFooterLeft = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-left');

            expect(cardHeader.textContent).toContain('Header');
            expect(cardContent.textContent).toContain('I am Content');
            expect(cardFooterLeft.textContent).toContain('Footer left');
            expect(cardFooterRight.textContent).toContain('Footer right');
        });
    });

    describe('attributes', () => {
        it('shows automation label', () => {
            const card = fixture.nativeElement.querySelector('apto-card');

            expect(card.getAttribute('automation')).toEqual('nice');
        });
    });
});
