const webpack = require('webpack');
const path = require('path');
const loader = require('babel-loader');

const BUILD_DIR = path.resolve(__dirname, 'client/dist');
const APP_DIR = path.resolve(__dirname, 'client/src/app/index.js');
const PUBLIC_PATH = path.resolve(__dirname, 'client/public');

const config = {
  entry: { main: APP_DIR },
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  watch: true
};

module.exports = config;