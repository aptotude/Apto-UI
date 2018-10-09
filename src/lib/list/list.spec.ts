import { async as ngAsync, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AptoIconComponentModule, AptoIconRegistry } from '../icon';
import { AptoListComponentModule } from './list.module';

@Component({
    selector: 'apto-test-app',
    template: `
    <apto-list>
        <apto-list-item data-item="0">
            First Thing
        </apto-list-item>
        <apto-list-item data-item="icon">
            <apto-icon aptoListItemIcon></apto-icon>
            icon list item
        </apto-list-item>
        <apto-list-item link data-item="link">
            Second Thing
        </apto-list-item>
        <apto-list-item active data-item="active">
            Active Thing
        </apto-list-item>
        <apto-list-item empty data-item="empty">
            Third Thing
        </apto-list-item>
    </apto-list>
    `
})
class TestComponent {

}

describe('apto-list', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: any;

    beforeEach(ngAsync(() => {
        TestBed.configureTestingModule({
            imports: [ AptoListComponentModule, AptoIconComponentModule ],
            declarations: [ TestComponent ],
            providers: [ AptoIconRegistry ]
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
        it('should have class on apto-list', () => {
            const list = fixture.nativeElement.querySelector('apto-list');
            expect(list.className).toBe('AptoList');
        });

        it('should have class on apto-list-item', () => {
            const listItem = fixture.nativeElement.querySelector('apto-list-item[data-item="0"]');
            expect(listItem.className).toBe('AptoListItem');
        });

        it('should have empty class on empty apto-list-item', () => {
            const listItem = fixture.nativeElement.querySelector('apto-list-item[data-item="empty"]');
            expect(listItem.className).toBe('AptoListItem AptoListItem--empty');
        });

        it('should have active class on active apto-list-item', () => {
            const listItem = fixture.nativeElement.querySelector('apto-list-item[data-item="active"]');
            expect(listItem.className).toBe('AptoListItem AptoListItem--active');
        });

        it('should have link class on link apto-list-item', () => {
            const listItem = fixture.nativeElement.querySelector('apto-list-item[data-item="link"]');
            expect(listItem.className).toBe('AptoListItem AptoListItem--link');
        });

        it('should have icon class on icon in apto-list-item', () => {
            const icon = fixture.nativeElement.querySelector('apto-list-item[data-item="icon"] [aptoListItemIcon]');
            expect(icon.className).toContain('AptoListItem-icon');
        });

        it('should have correct number of apto-list-item', () => {
            const listItems = fixture.nativeElement.querySelectorAll('apto-list-item');
            expect(listItems.length).toEqual(4);
        });
    });

    describe('dom', () => {
        it('should have AptoListItem-content as a child of apto-list-item', () => {
            const dom = fixture.nativeElement.querySelector(
                'apto-list-item[data-item="0"] > .AptoListItem-content'
            );

            expect(dom).not.toBe(null);
        });

        it('should have AptoListItem-text as child of AptoListItem-content', () => {
            const dom = fixture.nativeElement.querySelector(
                'apto-list-item[data-item="0"] > .AptoListItem-content > .AptoListItem-text'
            );

            expect(dom).not.toBe(null);
        });

        it('should not have AptoListItem-icon if no icon', () => {
            const dom = fixture.nativeElement.querySelector(
                'apto-list-item[data-item="0"] .AptoListItem-icon'
            );

            expect(dom).toBe(null);
        });

        it('should have AptoListItem-icon as child of AptoListItem-content', () => {
            const dom = fixture.nativeElement.querySelector(
                'apto-list-item[data-item="icon"] > .AptoListItem-content > .AptoListItem-icon'
            );

            expect(dom).not.toBe(null);
        });
    });

    describe('text content', () => {
        it('should have text', () => {
            const text = fixture.nativeElement.querySelector(
                'apto-list-item[data-item="0"] .AptoListItem-text'
            );

            expect(text.textContent).toContain('First Thing');
        });
    });
});
