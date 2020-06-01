const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.(ttf|eot|woff2?|ttf|svg)$/, use: 'url-loader' },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: 'babel-loader' }
    ]
  }
}