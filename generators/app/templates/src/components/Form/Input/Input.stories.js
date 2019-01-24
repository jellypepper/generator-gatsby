import { withInfo } from '@storybook/addon-info';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './index';

const DESCRIPTION = `Styled and controlled form input`,
  DEFAULTS = {
    label: 'Name',
    validationMessages: {
      valid: 'Looks good',
      invalid: `Doesn't look right`
    }
  };

storiesOf('Form/Input', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Input
      label={text('Label', DEFAULTS.label)}
      status={object('Validation Messages', DEFAULTS.validationMessages)}
    />
  ));
