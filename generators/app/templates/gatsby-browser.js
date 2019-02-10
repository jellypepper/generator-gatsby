import cssVarsPonyfill from 'css-vars-ponyfill';
import '@tomorrow/bloom/bloom.css';
import './src/globals/css/variables.css';
import './src/globals/css/global.css';

// Hack FOUC from CSS vars polyfill in IE11
try {
  const cssVarsSupported =
    window.CSS && window.CSS.supports && window.CSS.supports('(--a: 0)');

  if (!cssVarsSupported) {
    document.body.style.visibility = 'hidden';
  }

  cssVarsPonyfill({
    watch: true,
    updateURLs: false,
    onComplete() {
      setTimeout(() => (document.body.style.visibility = 'visible'), 10);
    }
  });
} catch (e) {
  // noop
}
