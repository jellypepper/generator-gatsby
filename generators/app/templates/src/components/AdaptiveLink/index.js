import { Link } from 'gatsby';
import React, { Component } from 'react';

/**
 * AdaptiveLink component
 * Link element that adapts to internal and external hrefs
 * @property {string} href
 */
export default class AdaptiveLink extends Component {
  static defaultProps = {
    href: ''
  };

  render() {
    const { href, children, className, ...attrs } = this.props,
      internalHref = /^\/(?!\/)/.test(href);

    let LinkElement = internalHref ? Link : 'a';

    if (!href) {
      LinkElement = 'span';
    }

    return (
      <LinkElement
        {...(internalHref ? { to: href } : { href: href })}
        className={className || ''}
        {...attrs}
      >
        {children}
      </LinkElement>
    );
  }
}
