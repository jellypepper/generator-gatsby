import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../assets/img/favicon.png';
import Footer from '../Footer';

/**
 * Head component
 * Sets head meta data
 * @property { } title * @property { } description * @property { } thumbnail * @property { } &#x27;&#x27;
 */
export default class Head extends Component {
  static defaultProps = {
    title: '<%= props.name %>',
    description: '<%= props.description %>',
    withFooter: true
  };

  render() {
    const { title, description, withFooter, children } = this.props;

    return (
      <StaticQuery
        render={data => (
          <>
            {/* Page-specific meta */}
            <Helmet>
              {/* Basic */}
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="author" content="<%= props.name %>" />
              <meta name="rating" content="general" />
              <link rel="shortcut-icon" href={favicon} />

              {/* Schema.org */}
              <meta itemprop="title" content={title} />
              <meta itemprop="description" content={description} />

              {/* Social & OpenGraph */}
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />

              {/* Social & OpenGraph */}
              <meta property="twitter:card" content="summary" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={description} />
            </Helmet>
            {children}
            {withFooter ? <Footer /> : null}
          </>
        )}
        query={graphql`
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `}
      />
    );
  }
}
