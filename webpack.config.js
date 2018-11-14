
var webpack = require('webpack');
var path = require('path');
var loader = require('babel-loader');

var BUILD_DIR = path.resolve(__dirname, 'client/src/public');
var APP_DIR = path.resolve(__dirname, 'client/src/app');

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  watch: true
};

module.exports = config;