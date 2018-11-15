import { withInfo } from '@storybook/addon-info';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './index';

const DESCRIPTION = `Simple UI button with various themes`,
  DEFAULT_PROPS = {
    text: 'Click me',
    href: '',
    theme: 'primary'
  },
  THEME_VALUES = {
    Primary: 'primary',
    Secondary: 'secondary'
  };

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Primary', () => (
    <Button
      href={text('Href', DEFAULT_PROPS.href)}
      theme={select('Theme', THEME_VALUES, DEFAULT_PROPS.theme)}
    >
      {text('Label', DEFAULT_PROPS.text)}
    </Button>
  ))
  .add('Secondary', () => (
    <Button
      href={text('Href', DEFAULT_PROPS.href)}
      theme={select('Theme', THEME_VALUES, 'secondary')}
    >
      {text('Label', DEFAULT_PROPS.text)}
    </Button>
  ));
