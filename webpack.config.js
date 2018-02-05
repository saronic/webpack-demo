const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo'
        })
    ],
    devServer: {
        stats: "errors-only",
        host: process.env.HOST,
        port: process.env.PORT,
        overlay: {
            errors: true,
            warnings: true,
          },
    },
};