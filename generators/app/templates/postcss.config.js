const CONFIG = {
  modularScale: {
    ratios: [1.5],
    // Body type, line-height
    bases: [1, 1.8]
  },
  lh: {
    // Body leading
    lineHeight: 1.6
  },
  subgrid: {
    ieHack: true
  },
  presetEnv: {
    stage: 2,
    autoprefixer: {
      grid: true
    }
  }
};

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-responsive-type'),
    require('postcss-modular-scale')(CONFIG.modularScale),
    require('postcss-lh')(CONFIG.lh),
    require('postcss-custom-media'),
    require('postcss-subgrid')(CONFIG.subgrid),
    require('postcss-aspect-ratio'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')(CONFIG.presetEnv),
    // Configure autoprefixer separately from preset-env, grid config borking
    require('autoprefixer')(CONFIG.presetEnv.autoprefixer)
  ]
};
