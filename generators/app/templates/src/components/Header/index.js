import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import './styles.module.css';

/**
 * Header component
 * Global header component
 */
export default class Header extends Component {
  render() {
    return (
      <StaticQuery
        render={header => {
          return <header>{/* Header markup */}</header>;
        }}
        query={graphql`
          {
          #  Header query
          }
        `}
      />
    );
  }
}
