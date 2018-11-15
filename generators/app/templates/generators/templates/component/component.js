import React, { Component } from 'react';
import './styles.module.css';

/**
 * {{name}} component
 * {{description}}
 {{#each props}}* @property { } {{this.name}}
 {{/each}}
 */
export default class {{name}} extends Component {
  static defaultProps = {
    {{#each props}}{{this.name}}: {{{this.value}}}{{#unless @last}},{{/unless}}
     {{/each}}
  }

  render() {
    const { {{#each props}}{{this.name}}, {{/each}} className, ...attrs } = this.props;

    return (
      <div className={className || ''} {...attrs}>

      </div>
    );
  }
}
