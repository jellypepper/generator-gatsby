import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import NavLink from './';

const DESCRIPTION = `Nav link component that takes href or Prismic document with patched deep active state`,
  DEFAULTS = {
    label: 'About',
    href: '/about',
    document: {
      raw: {
        uid: 'about'
      }
    },
    prefix: ''
  };

storiesOf('NavLink', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Href', () => <NavLink label={DEFAULTS.label} href={DEFAULTS.href} />)
  .add('Prismic Document', () => (
    <NavLink label={DEFAULTS.label} document={DEFAULTS.document} />
  ));
