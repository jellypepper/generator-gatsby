import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Hamburger from './index';

const DESCRIPTION = `Hamburger menu icon that transforms based on state`;

storiesOf('Hamburger', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Hamburger active={boolean('Active', false)} />);
