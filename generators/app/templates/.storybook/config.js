import { setOptions } from '@storybook/addon-options';
import * as storybook from '@storybook/react';
import '../src/lib/css/variables.css';
import '../src/lib/css/global.css';

// Override Gatsby's ___loader global
// (which prevents its method calls from creating console errors)
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Override Gatsby's window.___push method
// to report the path a Link uses it wasn't inside a storybook
window.___push = pathname => {
  action('NavigateTo:')(pathname);
};

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Customize Storybook
setOptions({
  name: '',
  url: '',
  addonPanelInRight: false
});

storybook.configure(loadStories, module);
