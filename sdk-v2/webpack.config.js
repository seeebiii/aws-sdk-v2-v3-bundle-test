// Import path for resolving file paths
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => ({
  entry: [
    path.join(__dirname, env.entry)
  ],
  output: {
    path: path.join(__dirname, 'build', 'webpack'),
    filename: env.output
  },
  mode: 'production',
  target: 'node',
  module: {},
  externals: env.includeAwsSdk === 'false' ? {
    ['aws-sdk' + (env.entry.indexOf('_direct.js') > 0 ? '/clients/dynamodb' : '')]: 'awssdk'
  } : {},
  optimization: {
    minimize: env.minify === 'true',
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  }
})
