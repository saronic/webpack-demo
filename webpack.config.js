const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const commonConfig = merge([
    {
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
            }),
            
        ], 
    },
]);

const productConfig = merge([
    parts.extractCSS({
        use: 'css-loader',
    }),
]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.loadCSS(),
])

module.exports = env => {
    if (env === 'production') {
        return merge(commonConfig, productConfig);
    }

    return merge(commonConfig, developmentConfig);
}