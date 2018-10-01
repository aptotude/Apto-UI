import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoCardComponentModule } from './card.module';
import { AptoButtonComponentModule } from '../button';


@Component({
    selector: 'apto-test-app',
    template: `
    <apto-card>
        <apto-card-header>Header</apto-card-header>
        <apto-card-content>I am Content</apto-card-content>
        <apto-card-footer>
            <apto-card-footer-left>
                <apto-button>Footer left</apto-button>
            </apto-card-footer-left>
            <apto-card-footer-right>
                <apto-button>Footer right</apto-button>
            </apto-card-footer-right>
        </apto-card-footer>
    </apto-card>
    <apto-card data-no-content-padding-card>
        <apto-card-content noPadding>I am Content</apto-card-content>
    </apto-card>
    <apto-card data-no-header-padding-card>
        <apto-card-header noBottomPadding>I am Header</apto-card-header>
    </apto-card>
    `
})
class TestComponent {
    public noPadding = false;
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
            expect(card.className).toBe('AptoCard');
        });

        it('has the correct header class name', () => {
            const cardHeader = fixture.nativeElement.querySelector('apto-card apto-card-header');

            expect(cardHeader.className).toBe('AptoCardHeader');
        });

        it('has the correct content class name', () => {
            const cardContent = fixture.nativeElement.querySelector('apto-card apto-card-content');

            expect(cardContent.className).toBe('AptoCardContent');
        });

        it('has the correct content no padding class name', () => {
            const cardContent = fixture.nativeElement.querySelector('apto-card[data-no-content-padding-card] apto-card-content');

            expect(cardContent.className).toBe('AptoCardContent AptoCardContent--noPadding');
        });

        it('has the correct header no padding class name', () => {
            const cardHeader = fixture.nativeElement.querySelector('apto-card[data-no-header-padding-card] apto-card-header');

            expect(cardHeader.className).toBe('AptoCardHeader AptoCardHeader--noBottomPadding');
        });

        it('has the correct footer class names', () => {
            const cardFooter = fixture.nativeElement.querySelector('apto-card apto-card-footer');
            const cardFooterRight = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-right');
            const cardFooterLeft = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-left');

            expect(cardFooter.className).toBe('AptoCardFooter');
            expect(cardFooterRight.className).toBe('AptoCardFooter-right');
            expect(cardFooterLeft.className).toBe('AptoCardFooter-left');
        });
    });

    describe('text', () => {
        it('shows content when text is passed', () => {
            const cardHeader = fixture.nativeElement.querySelector('apto-card apto-card-header');
            const cardContent = fixture.nativeElement.querySelector('apto-card apto-card-content');
            const cardFooterRight = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-right');
            const cardFooterLeft = fixture.nativeElement.querySelector('apto-card apto-card-footer apto-card-footer-left');

            expect(cardHeader.textContent).toContain('Header');
            expect(cardContent.textContent).toContain('I am Content');
            expect(cardFooterLeft.textContent).toContain('Footer left');
            expect(cardFooterRight.textContent).toContain('Footer right');
        });
    });
});
