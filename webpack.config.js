const webpack = require('webpack')
const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/beomy.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'beomy.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './example/index.html',
      filename: './index.html'
    })
  ]
}
