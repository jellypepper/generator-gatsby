import { withInfo } from '@storybook/addon-info';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import AdaptiveImg from './index';

const DESCRIPTION = `Automatically lazy loads and uses src sets if appropriate data is available, otherwise falls back to a standard <img> element`,
  DEFAULT_PROPS = {
    image: 'https://source.unsplash.com/random'
  };

// Define stories for component
storiesOf('AdaptiveImg', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('With src', () => <AdaptiveImg src={text('src', DEFAULT_PROPS.image)} />)
  .add('With data object', () => (
    <AdaptiveImg
      data={object('Image data', {
        url: DEFAULT_PROPS.image
      })}
    />
  ));
