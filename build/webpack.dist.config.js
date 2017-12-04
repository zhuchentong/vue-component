const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CompressionPlugin = require('compression-webpack-plugin');

process.env.NODE_ENV = 'production';
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});