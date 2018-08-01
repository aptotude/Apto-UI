import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/lib', true, /\.stories\.ts$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

setOptions({
    name: 'Apto UI',
    url: '/#'
});

configure(loadStories, module);
