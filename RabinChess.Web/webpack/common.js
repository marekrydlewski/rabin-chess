/* eslint-disable */

var autoprefixer = require('autoprefixer')
var htmlPlugin   = require('html-webpack-plugin')
var path         = require('path')



module.exports = {
  context: path.resolve('./src'),
  entry: './scripts/main.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /scripts/,
        loader: 'babel',
      },
      {
        test: /\.(jpg|png|svg|woff)$/,
        include: /assets/,
        loader: 'file',
        query: {
          name: 'assets/[name].[ext]',
        },
      },
      {
        test: /\.json$/,
        include: /assets/,
        loader: 'json',
      },
      {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/,
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./build'),
  },
  plugins: [
    new htmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeTagWhitespace: true,
      },
      template: 'index.html',
    }),
  ],
  postcss: function() {
    return [
      autoprefixer,
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve('./src/assets'),
      styles: path.resolve('./src/styles'),
    },
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json',
      '.sass',
      '.scss',
    ],
  },
}
