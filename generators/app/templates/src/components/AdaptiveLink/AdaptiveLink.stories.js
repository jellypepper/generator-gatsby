import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import AdaptiveLink from './index';

const DESCRIPTION = `Link element that adapts to internal and external hrefs`;

storiesOf('AdaptiveLink', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <AdaptiveLink href={text('Href', 'https://google.com')}>
      Some link
    </AdaptiveLink>
  ));
