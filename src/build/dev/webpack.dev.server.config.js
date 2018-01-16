const path = require('path')
const webpack = require('webpack')
const babelConf = require('./.babelrc.server.json')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', '..', 'server', 'server.ts'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf,
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf,
          },
          {
            loader: 'ts-loader',
            options: {
              // Necessary for HMR, see README.
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new Dotenv({
      path: './.env'
    })
  ],
  // profile: true,
  resolve: {
    // Default setting: `[".js", ".json"]`. Augmented to allow for JSX, and
    // TypeScript when leaving off module filename extension. The last item in
    // the array, `"*"`, is to allow for proper module resolution for modules
    // that are imported using an extension.
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*'],

    // The default array when setting `target: 'node'` is `["module", "main"]`,
    // so the array is augmented to include support for TypeScript
    mainFields: ['module', 'main', 'types'],
  },
  target: 'node',
  watch: true,
}
