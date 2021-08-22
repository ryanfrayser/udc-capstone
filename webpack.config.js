const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { web } = require('webpack');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
mode: mode,
target: 'web',
devtool: 'inline-source-map',
entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client/index.js']
},


output: {
    path: path.join(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
},


module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
      test: /\.scss$/,
             use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },

      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },


plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
    title: 'Development',
    template :"./src/client/views/index.html",
    filename: "index.html"
    }),


],



};