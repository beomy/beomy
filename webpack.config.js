const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: './sample/index.html',
    //         filename: './index.html'
    //     })
    // ]
};