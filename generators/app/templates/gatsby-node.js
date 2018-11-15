const path = require(`path`);
const WebpackNotifierPlugin = require('webpack-notifier');

const TEMPLATES = './src/templates',
  PAGE_CONFIGS = {
    // example: {
    //   query: `{}`,
    //   rootQueryNode: '',
    //   basePath: '/',
    //   templateName: ''
    // }
  };

/**
 * Page generation
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  async function generatePages({
    query,
    rootQueryNode,
    basePath,
    templateName
  }) {
    const pageData = await graphql(query);
    pageData.data[rootQueryNode].edges.forEach(({ node }) => {
      createPage({
        path: `${basePath}/${node.uid}`,
        component: path.resolve(`${TEMPLATES}/${templateName}/index.js`),
        context: {
          id: node.id,
          uid: node.uid
        }
      });
    });
  }

  Object.keys(PAGE_CONFIGS).forEach(page => generatePages(PAGE_CONFIGS[page]));
};

/**
 * Webpack customization
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // Add notifier
    plugins: [
      new WebpackNotifierPlugin({
        skipFirstNotification: true
      })
    ]
  });
};
