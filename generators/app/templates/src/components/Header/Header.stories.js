import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from './index';

const DESCRIPTION = `Global header component`;

storiesOf('Header', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Header />);
