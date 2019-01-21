import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import '../src/globals/css/variables.css';
import '../src/globals/css/global.css';

// Stub Gatsby's globals
global.__PATH_PREFIX__ = '';
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Stub Gatsby's navigation
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withOptions({
    name: '<%= props.name %>',
    url: '<%= props.url %>',
    addonPanelInRight: false
  })
);

configure(loadStories, module);
