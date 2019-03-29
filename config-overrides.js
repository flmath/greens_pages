module.exports = function override(config, env) {
  config.module.rules.unshift(
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      }
    })
  return config;
}
