/* eslint-disable */

var merge   = require('webpack-merge');
var path    = require('path')
var webpack = require('webpack')

var common = require('./common')



module.exports = merge(common, {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        include: /scripts|styles/,
        loaders: [
          'style',
          'css?minimize',
          'postcss',
          'sass?indentedSyntax',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap&modules',
          'postcss',
          'sass',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],



  devServer: {
    contentBase: 'build',
    hot: true,
    inline: true,
    port: process.env.npm_package_config_port,
  }
})
