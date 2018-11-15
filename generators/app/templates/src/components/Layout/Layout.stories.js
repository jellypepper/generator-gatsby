import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Layout from './index';

const DESCRIPTION = `The core layout that sets up a view`;

storiesOf('Layout', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Layout />);
