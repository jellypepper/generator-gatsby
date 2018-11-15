import Img from 'gatsby-image';
import React, { Component } from 'react';

/**
 * AdaptiveImg component
 * Automatically lazy loads and uses src sets if appropriate data is available,
 * otherwise falls back to a standard <img> element
 * @property {string} src Optional src for static image
 * @property {object} data Image data object from Prismic
 */
export default class AdaptiveImg extends Component {
  static defaultProps = {
    data: {},
    src: '',
    alt: '',
    tilt: null
  };

  render() {
    const { src, data, alt, className, tilt, ...attrs } = this.props,
      hasImgSet = !!data.localFile && !!data.localFile.childImageSharp,
      ImgElement = hasImgSet ? Img : 'img';

    const element = (
      <ImgElement
        {...(hasImgSet
          ? { fluid: data.localFile.childImageSharp.fluid }
          : { src: src || data.url })}
        className={className || ''}
        style={{
          borderRadius: 'var(--border-radius)',
          maxWidth: '100%'
        }}
        alt={alt}
        {...attrs}
      />
    );

    return tilt ? (
      <Tilt className="Tilt" options={{ max: tilt, scale: 1 }}>
        {element}
      </Tilt>
    ) : (
      element
    );
  }
}
