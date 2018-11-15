import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Page from '../../components/Page';
import './styles.module.css';

export default class {{properCase name}}Page extends Component {
  render() {
    const { data } = this.props.data.{{queryNode}};

    return (
      <Page title={data.title} description={data.description}>

      </Page>
    );
  }
}

export const {{properCase name}}Query = graphql`
  query{{#if isTemplate}}($id: String!){{/if}} {
    {{queryNode}}{{#if isTemplate}}(id: { eq: $id }){{/if}} {
      data {
        title
        description
      }
    }
  }
`;
