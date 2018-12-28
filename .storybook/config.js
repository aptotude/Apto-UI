import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../apto-ui-lib', true, /\.stories\.ts$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

setOptions({
    name: 'Apto UI',
    url: 'https://aptotude.github.io/apto-ui/'
});

configure(loadStories, module);