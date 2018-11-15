import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Page from './index';

const DESCRIPTION = `Sets Page meta data`;

storiesOf('Page', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Page
      title={text('Title', '')}
      description={text('Description', '')}
      withFooter={boolean('Include footer', true)}
    />
  ));
