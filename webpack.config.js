const path           = require('path');
const webpack        = require('webpack');
const CleanPlugin    = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },

  devtool: 'source-map',

  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  },

  plugins: [
    new CleanPlugin(['build'], { root: __dirname }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ]
}