const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const { resolve } = require('./utils')

module.exports = merge(baseConf, {
  mode: 'production',
  entry: resolve('src/index.ts'),
  output: {
    filename: 'cactus-ui.common.js',
    path: resolve('lib'),
    publicPath: '/',
    library: 'pasord-cactus-ui',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
    '@vue/composition-api': '@vue/composition-api',
  },

  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'theme/index.css',
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
