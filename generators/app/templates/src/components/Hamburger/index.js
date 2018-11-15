import React, { Component } from 'react';
import './styles.module.css';

/**
 * Hamburger component
 * Menu icon that animates open/closed
 * @property {boolean} active Whether icon is 'opened'
 */
export default class Hamburger extends Component {
  static defaultProps = {
    active: false
  };

  render() {
    const { active, className, ...attrs } = this.props;

    return (
      <div styleName="wrapper" className={className || ''} {...attrs}>
        <div styleName="burger" data-active={active}>
          <span styleName="burger-middle" />
        </div>
      </div>
    );
  }
}
