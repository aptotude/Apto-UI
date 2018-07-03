import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/components', true, /\.stories\.ts$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

setOptions({
    name: 'Apto UI',
    url: '/#',
    showAddonPanel: false,
    showStoriesPanel: true
});

configure(loadStories, module);
