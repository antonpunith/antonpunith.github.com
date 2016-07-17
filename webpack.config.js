// Initialization
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP = __dirname + '/app';
const BUILD = __dirname + '/build';
const STYLE = __dirname + '/app/style.scss';

module.exports = {
  // Paths and extensions
  entry: {
    app: APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // Loaders for processing different file types
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      }
    ]
  },
  // Source maps used for debugging information
  devtool: 'eval-source-map',
  // webpack-dev-server configuration
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only',

    host: process.env.HOST,
    port: process.env.PORT
  },
  // Webpack plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Anton Punith | Web developer',
      appMountId: 'app',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
