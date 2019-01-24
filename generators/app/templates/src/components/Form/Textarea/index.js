import autosize from 'autosize';
import React, { Component } from 'react';
import { randomId } from '../';
import '../styles.module.css';

function initTextarea(textarea) {
  setTimeout(() => autosize(textarea), 0);
}

/**
 * Textarea component
 * A styled and controlled textarea that grows based on input
 * @property {string} label Label for input
 */
export default class Textarea extends Component {
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
        validationMessages,
        required,
        className,
        ...attrs
      } = this.props,
      syncedId = randomId();

    return (
      <div className={className || ''}>
        <label styleName="label" htmlFor={syncedId}>
          {label}
        </label>
        <textarea
          styleName="input input--textarea"
          id={syncedId}
          rows="1"
          required={required}
          ref={initTextarea}
          {...attrs}
        />
        <span
          styleName="status"
          data-valid-message={validationMessages.valid}
          data-invalid-message={validationMessages.invalid}
        />
      </div>
    );
  }
}
