const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const { resolve } = require('./utils')

module.exports = merge(baseConf, {
  mode: 'production',
  entry: resolve('doc/main.js'),
  output: {
    filename: 'js/[name].[contenthash].js',
    path: resolve('dist'),
    publicPath: '/vue-cactus-ui/',
    library: 'cactus-ui-doc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('doc/components'),
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('doc/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/doc.min.[contenthash].css',
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessor: require('cssnano'), // 引入cssnano配置压缩选项
      cssProcessorOptions: {
        discardComments: { removeAll: true }, // 去除所有注释
      },
      canPrint: true, // 是否将插件信息打印到控制台
    }),
  ],
})
