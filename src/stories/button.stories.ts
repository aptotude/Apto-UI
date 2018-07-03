import { storiesOf } from '@storybook/angular';
import { AptoButton, ButtonKinds } from '../components/button/button.component';

storiesOf('Buttons/Primary', module)
    .add('Active', () => ({
        component: AptoButton,
        props: {
            text: 'Next'
        },
    }))
    .add('Inactive', () => ({
        component: AptoButton,
        props: {
            text: 'Next',
            active: false
        },
    }))
;

storiesOf('Buttons/Secondary', module)
    .add('Active', () => ({
        component: AptoButton,
        props: {
            text: 'Next',
            kind: ButtonKinds.Secondary
        },
    }))
    .add('Inactive', () => ({
        component: AptoButton,
        props: {
            text: 'Next',
            kind: ButtonKinds.Secondary,
            active: false

        },
    }))
;
