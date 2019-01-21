const path = require('path');

const NEW_RULES = {
  cssModules: {
    test: /\.module\.css$/,
    use: [
      `style-loader`,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[path]--[local]--[hash:base64:5]'
        }
      },
      `postcss-loader`
    ],
    include: path.resolve(__dirname, '../src')
  },
  svgr: {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: false
        }
      },
      'url-loader'
    ]
  }
};

module.exports = (baseConfig, env, config) => {
  const findRule = ext => {
    return config.module.rules.find(rule => {
      return rule.test.toString().includes(ext);
    });
  };

  findRule('js').exclude = /node_modules\/(?!(gatsby)\/)/;

  findRule('css').use.push('postcss-loader');
  findRule('css').exclude = /\.module\.css$/;
  config.module.rules.push(NEW_RULES.cssModules);

  findRule('svg').exclude = /\.svg$/;
  config.module.rules.push(NEW_RULES.svgr);

  return config;
};
