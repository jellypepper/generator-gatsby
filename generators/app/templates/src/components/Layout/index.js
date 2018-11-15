import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Header';
import './styles.module.css';

const JSON_LD_META = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': '#website',
    url: '<%= props.url %>',
    name: '<%= props.name %>'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: '<%= props.url %>',
    '@id': '#organization',
    name: '<%= props.name %>'
  }
];

/**
 * Page template
 * The core page layout that sets up a view
 * Automatically wrapped around all other tempaltes and views by gatsby-plugin-layout
 */
export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div styleName="page">
        <Helmet>
          <html lang="en" />
          <script type="application/ld+json">
            {JSON.stringify(JSON_LD_META)}
          </script>
        </Helmet>

        <Header />

        <main styleName="content">{children}</main>
      </div>
    );
  }
}
