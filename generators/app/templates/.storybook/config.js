import { setOptions } from '@storybook/addon-options';
import * as storybook from '@storybook/react';
import '../src/lib/css/variables.css';
import '../src/lib/css/global.css';

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

// Customize Storybook
setOptions({
  name: '<%= props.name %>',
  url: '<%= props.url %>',
  addonPanelInRight: false
});

storybook.configure(loadStories, module);
