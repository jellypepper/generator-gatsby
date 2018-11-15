import cssVarsPonyfill from 'css-vars-ponyfill';
import './src/lib/css/global.css';
import './src/lib/css/variables.css';

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
