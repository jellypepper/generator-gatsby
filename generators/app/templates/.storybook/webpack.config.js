const BABEL = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties', 'babel-plugin-macros']
  },
  SVGR = {
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: false
        }
      },
      'url-loader'
    ]
  };

module.exports = (baseConfig, env, defaultConfig) => {
  const findRule = testMatch => {
    return defaultConfig.module.rules.find(rule => {
      return rule.test.toString() === testMatch.toString();
    });
  };

  const svgRule = findRule(/\.svg$/),
    cssRule = findRule(/\.css$/);

  // Update JS loader for Gatsby
  defaultConfig.module.rules[0] = {
    test: /\.js$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: BABEL
      }
    ],
    exclude: [/node_modules\/(?!(gatsby)\/)/]
  };

  // Add PostCSS to global CSS files
  cssRule.use.push('postcss-loader');

  // Add SVGR transformer
  delete svgRule.loader;
  svgRule.use = SVGR.use;

  return defaultConfig;
};
