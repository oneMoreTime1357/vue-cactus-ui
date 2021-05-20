'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { resolve } = require('./utils')

const HOST = '0.0.0.0'
const PORT = 8082

module.exports = merge(baseConf, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../doc/main.js'),

  devServer: {
    publicPath: '/',
    contentBase: 'dist',
    host: HOST,
    port: PORT,
    compress: true,
    hot: true,
    clientLogLevel: 'warning',
    overlay: { errors: true, warnings: true },
    quiet: true,
    progress: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('doc/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${HOST}:${PORT}`],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
      onErrors: function (severity, errors) {},
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
  ],
})
