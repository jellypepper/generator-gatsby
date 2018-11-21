import { Link } from 'gatsby';
import React, { Component } from 'react';
import './styles.module.css';

/**
 * Nav link component with patched deep active state
 * @property {object} link Linked Prismic document
 * @property {string} label Text to show for link
 * @property {onClick} function Click handler callback
 *
 */
export default class NavLink extends Component {
  static defaultProps = {
    link: {},
    label: '',
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
    const { link, label, prefix, onClick, className } = this.props;
    const href = `/${prefix && prefix + '/'}${
      link.raw.uid !== 'home' ? link.raw.uid : ''
    }`;

    return (
      <Link
        to={href}
        className={className || ''}
        getProps={this.isActive}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
}
