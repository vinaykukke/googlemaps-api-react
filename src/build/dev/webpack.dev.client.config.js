const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConf = require('./.babelrc.client.json');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // These next two lines must be set in order for hot reloading to work. The
    // first seems to activate WDS updates, and the second perform the HMR.
    'webpack-dev-server/client?http://localhost:4000/',
    'webpack/hot/dev-server',
    path.resolve(__dirname, '..', '..', 'client', 'client.tsx'),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
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
    filename: 'client.bundle.js',
    path: path.resolve('dist'),
    // It allows you to specify the base path for all the assets within the application.
    // All the resources within "dist" now are accessable through this path.
    publicPath: '/',
  },
  plugins: [
    // This plugin will cause the relative path of the module to be displayed when HMR is enabled.
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates', 'index.ejs')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env'
    })
  ],
  profile: true,
  resolve: {
    alias: {
      Redux: path.resolve(__dirname, '..', '..', 'client', 'redux'),
      Components: path.resolve(__dirname, '..', '..', 'client', 'components'),
      Constants: path.resolve(__dirname, '..', '..', 'client', 'constants'),
      Scenes: path.resolve(__dirname, '..', '..', 'client', 'scenes'),
    },
    // Default setting: `[".js", ".json"]`. Augmented to allow for JSX, and
    // TypeScript when leaving off module filename extension. The last item in
    // the array, `"*"`, is to allow for proper module resolution for modules
    // that are imported using an extension.
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*'],

    // When leaving `target` unspecified in the config, it defaults to `"web"`.
    // Web's default is `mainFields: ["browser", "module", "main"]`, so the
    // array is augmented to include support for TypeScript
    mainFields: ['browser', 'module', 'main', 'types'],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  }
}
