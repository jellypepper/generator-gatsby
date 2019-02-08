const dotenv = require('dotenv');
dotenv.load();

function resolveLinks({ type, uid, isBroken }) {
  if (isBroken) {
    return null;
  }

  switch (type) {
    case 'home':
      return `/`;
    default:
      return `/${uid}`;
  }
}

const PLUGIN_OPTS = {
  prismic: {
    repositoryName: '<%= props.prismicRepo %>',
    accessToken: process.env.PRISMIC_TOKEN,
    linkResolver: () => resolveLinks
  },
  manifest: {
    name: '<%= props.name %>',
    short_name: '<%= props.name %>',
    background_color: '#fff',
    theme_color: '#111',
    icon: './src/assets/img/icon.png',
    display: 'minimal-ui',
    include_favicon: false
  },
  layout: {
    component: require.resolve(`./src/components/Layout`)
  },
  svgr: {
    icon: false
  },
  nprogress: {
    color: '#111',
    showSpinner: false
  }
};

module.exports = {
  siteMetadata: {
    siteUrl: '<%= props.url %>'
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: PLUGIN_OPTS.prismic
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: PLUGIN_OPTS.layout
    },
    'gatsby-plugin-react-css-modules',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-svgr',
      options: PLUGIN_OPTS.svgr
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: PLUGIN_OPTS.nprogress
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: PLUGIN_OPTS.manifest
    },
    // Offline must be called after manifest
    'gatsby-plugin-offline',
    // Netlify must be called last
    'gatsby-plugin-netlify'
  ]
};
