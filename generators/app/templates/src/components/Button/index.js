import React, { Component } from 'react';
import AdaptiveLink from '../AdaptiveLink';
import './styles.module.css';

/**
 * Button component
 * Simple UI button with various themes
 * @property {string} href Target URL to link to
 * @property {string} theme [primary|secondary] Style theme for button
 */
export default class Button extends Component {
  static defaultProps = {
    href: '',
    theme: 'primary'
  };

  render() {
    const { href, theme, className, children, ...attrs } = this.props,
      Element = href ? AdaptiveLink : 'button';

    return (
      <Element
        href={href}
        theme={theme}
        styleName="button"
        className={className || ''}
        {...attrs}
      >
        {children}
      </Element>
    );
  }
}
