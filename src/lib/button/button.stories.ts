import { storiesOf } from '@storybook/angular';
import { AptoButtonComponent, ButtonKinds, ButtonTypes } from './button.component';

storiesOf('Buttons/Button/Primary', module)
    .add('Active', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next'
        },
    }))
    .add('Inactive', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next',
            active: false
        },
    }))
;

storiesOf('Buttons/Link/Primary', module)
    .add('Active', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next',
            kind: ButtonKinds.Primary,
            type: ButtonTypes.Link
        },
    }))
    .add('Inactive', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next',
            kind: ButtonKinds.Primary,
            type: ButtonTypes.Link,
            active: false

        },
    }))
;

storiesOf('Buttons/Link/Secondary', module)
    .add('Active', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next',
            kind: ButtonKinds.Secondary,
            type: ButtonTypes.Link
        },
    }))
    .add('Inactive', () => ({
        component: AptoButtonComponent,
        props: {
            text: 'Next',
            kind: ButtonKinds.Secondary,
            type: ButtonTypes.Link,
            active: false

        },
    }))
;
