import { Link } from 'gatsby';
import React, { Component } from 'react';
import './styles.module.css';

/**
 * Nav link component that takes href or Prismic document
 * with patched deep active state
 * @property {object} link Linked Prismic document
 * @property {string} href Direct href
 * @property {string} label Text to show for link
 * @property {onClick} function Click handler callback
 *
 */
export default class NavLink extends Component {
  static defaultProps = {
    label: '',
    href: '',
    document: {},
    prefix: ''
  };

  // Patch deep active state
  // Temporary patch until  https://github.com/gatsbyjs/gatsby/issues/7208 is fixed
  isActive = ({ isCurrent, isPartiallyCurrent, href }) => {
    if (isCurrent || (isPartiallyCurrent && href !== '/')) {
      return { 'data-active': 'true' };
    }
    return null;
  };

  render() {
    const { document, href, label, prefix, onClick, className } = this.props;
    const link = href
      ? href
      : `/${prefix && prefix + '/'}${
          document.raw.uid !== 'home' ? document.raw.uid : ''
        }`;

    return (
      <Link
        to={link}
        className={className || ''}
        getProps={this.isActive}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
}
