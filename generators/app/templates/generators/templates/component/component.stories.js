import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {{name}} from './index'

const DESCRIPTION = `{{description}}`;

storiesOf('{{name}}', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <{{name}} />);
