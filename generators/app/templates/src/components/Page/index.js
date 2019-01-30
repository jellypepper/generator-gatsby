import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../assets/img/favicon.png';

/**
 * Head component
 * Sets head meta data
 * @property {string} title Title of the page
 * @property {string} description Description of the page
 * @property {string} cover URL to cover image for the page
 */
export default class Head extends Component {
  static defaultProps = {
    title: '<%= props.name %>',
    description: '<%= props.description %>',
    cover: ''
  };

  render() {
    const { title, description, children } = this.props;

    return (
      <StaticQuery
        render={data => (
          <>
            <Helmet>
              {/* Basic */}
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="author" content="builtbytomorrow.com" />
              <meta name="rating" content="general" />
              <meta name="image" content={cover} />

              {/* Schema.org */}
              <meta itemprop="title" content={title} />
              <meta itemprop="description" content={description} />
              <meta itemprop="image" content={cover} />

              {/* Social */}
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={cover} />
              <meta property="twitter:card" content="summary" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={description} />
              <meta property="twitter:image" content={cover} />
            </Helmet>
            {children}
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
