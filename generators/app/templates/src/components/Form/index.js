import { Link, push } from 'gatsby';
import React, { Component } from 'react';
import { Notification } from 'react-notification';
import Button from '../Button';
import './styles.module.css';

const HUBSPOT_LAMDA = `/.netlify/functions/hubspot`,
  REDIRECT = '/thank-you',
  ERROR_NOTIFY = {
    message: `Uh oh, something went wrong. Try again?`,
    duration: 5000
  };

export function randomId() {
  return Math.random()
    .toString(36)
    .substring(7);
}

/**
 * Form component
 * Form controller with Hubspot and Netlify providers
 * @property {string} provider Which provider backend to hook into
 * @property {object} config Config details for provider
 * @property {object} formData Data to submit
 */
export default class Form extends Component {
  state = {
    notifying: false,
    submitAttempted: false
  };

  static defaultProps = {
    name: '',
    provider: '',
    config: {},
    formData: {},
    submitText: 'Submit',
    busy: false
  };

  reset = () => {
    this.setState({ submitAttempted: false });
  };

  submit = e => {
    const { name, provider, config, formData } = this.props,
      submitted = state => {
        if (state === 'success') {
          window.ga && window.ga('send', 'event', `${name} Form`, 'submit');
          push(REDIRECT);
        } else {
          this.setState({
            notifying: true
          });

          setTimeout(
            () => this.setState({ notifying: false }),
            ERROR_NOTIFY.duration
          );
        }
      };

    if (provider !== 'hubspot') {
      return;
    }

    e.preventDefault();

    fetch(HUBSPOT_LAMDA, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        hubspot: {
          portalId: config.portalId,
          formId: config.formId,
          pageUrl: window.location,
          pageName: document.title
        },
        formData: {
          ...formData
        }
      })
    })
      .then(() => submitted('success'))
      .catch(() => submitted('fail'));
  };

  attemptedSubmit = e => {
    this.setState({
      submitAttempted: true
    });
  };

  render() {
    const {
        provider,
        config,
        name,
        formData,
        submitText,
        busy,
        className,
        children,
        ...attrs
      } = this.props,
      { notifying, submitAttempted } = this.state;

    return (
      <form
        styleName="form"
        className={className || ''}
        name={name}
        data-submitted={submitAttempted}
        method="POST"
        action={provider === 'netlify' ? '/thank-you' : '/'}
        {...(provider === 'netlify' ? { 'data-netlify': 'true' } : {})}
        {...(provider === 'netlify' ? { 'netlify-honeypot': 'bot-field' } : {})}
        onSubmit={this.submit}
        {...attrs}
      >
        {children}
        {provider === 'netlify' ? (
          <input type="hidden" name="form-name" value={name} />
        ) : null}
        {provider === 'hubspot' ? (
          <div styleName="legal">
            <p>
              Erudito is committed to protecting and respecting your privacy,
              and we’ll only use your personal information to administer your
              account and to provide the products and services you requested
              from us. From time to time, we would like to contact you about our
              products and services, as well as other content that may be of
              interest to you. You may unsubscribe from these communications at
              any time. For more information on how to unsubscribe, our privacy
              practices, and how we are committed to protecting and respecting
              your privacy, please review our{' '}
              <Link to="/privacy">Privacy Policy</Link>. By clicking submit, you
              consent to allow Erudito to store and process the personal
              information submitted above to provide you the content requested
              and to receive other communications from Erudito.
            </p>
          </div>
        ) : null}

        <div styleName="submit" className="form-submit">
          <Button onClick={this.attemptedSubmit} type="submit" busy={busy}>
            {submitText}
          </Button>
        </div>

        <Notification isActive={notifying} message={ERROR_NOTIFY.message} />
      </form>
    );
  }
}

/**
 * FormTwoUp component
 * Display inputs side-by-side within a form
 */
export class FormTwoUp extends Component {
  render() {
    const { className, children, ...attrs } = this.props;

    return (
      <div styleName="twoup" className={className || ''} {...attrs}>
        {children}
      </div>
    );
  }
}
