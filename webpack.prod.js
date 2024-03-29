const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
  mode: 'production',
  entry: './src/beomy.js',
  output: {
    filename: 'beomy.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(['dist'])
  ]
}
