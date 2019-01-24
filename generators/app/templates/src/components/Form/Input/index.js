import React, { Component } from 'react';
import '../styles.module.css';

function randomId() {
  return Math.random()
    .toString(36)
    .substring(7);
}

/**
 * Input component
 * Styled and controlled form input
 * @property {string} label Label for input
 * @property {object} status<type:string, message:string> Config for success/error messages
 */
export default class Input extends Component {
  static defaultProps = {
    label: '',
    required: true,
    validationMessages: {
      valid: '',
      invalid: ''
    }
  };

  render() {
    const {
        label,
        required,
        validationMessages,
        status,
        className,
        ...attrs
      } = this.props,
      syncedId = randomId();

    return (
      <div className={className || ''}>
        <label className="label" styleName="label" htmlFor={syncedId}>
          {label}
        </label>
        <input
          className="input"
          styleName="input"
          id={syncedId}
          required={required}
          {...attrs}
        />
        <span
          className="status"
          styleName="status"
          data-valid-message={validationMessages.valid}
          data-invalid-message={validationMessages.invalid}
        />
      </div>
    );
  }
}
