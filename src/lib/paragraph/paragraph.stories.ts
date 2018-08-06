import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AptoParagraphComponentModule } from './paragraph.module';
import { withMarkdownNotes } from '@storybook/addon-notes';
import * as paragraphMd from './docs/paragraph.md';

storiesOf('Typography', module)
    .addDecorator(
        moduleMetadata({
            imports: [ AptoParagraphComponentModule ]
        })
    )
    .add('Paragraph', withMarkdownNotes(paragraphMd)(() => ({
        template: `
            <apto-paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
            Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</apto-paragraph>
            <apto-paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
            Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</apto-paragraph>

            <h5 style="margin-top: 30px; margin-bottom:5px; padding: 0;">Tight Spacing using the <code>tight</code> Attribute</h5>
            <apto-paragraph tight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
            Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</apto-paragraph>
            <apto-paragraph tight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
            Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</apto-paragraph>
        `
    })))
;
