import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import './styles.module.css';

/**
 * Footer component
 * Global website footer
 */
export default class Footer extends Component {
  render() {
    const { className, ...attrs } = this.props;

    return (
      <StaticQuery
        render={footer => {
          return (
            <footer className={className || ''} {...attrs}>
              {/* Footer markup */}
            </footer>
          );
        }}
        query={graphql`
          {
            # Footer query
          }
        `}
      />
    );
  }
}
