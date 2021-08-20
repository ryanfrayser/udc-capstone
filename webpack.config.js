const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
entry: {
    index: './src/client/index.js'
},
resolve: {
    extensions: ['.js']
  },

devtool: 'inline-source-map',
devServer: {
    contentBase: './dist',
},


plugins: [
    new HtmlWebpackPlugin({
    title: 'Development',
    }),
],


output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
},
};