/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const package = require('../package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  // 加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            css: process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }) : "vue-style-loader!css-loader",
            less:  process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract({
              use: [
                'css-loader',
                'less-loader'
              ],
              fallback: 'vue-style-loader'
            }): "vue-style-loader!css-loader!less-loader",
          },
          postLoaders: {
            html: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'autoprefixer-loader'
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${package.version}'`
    })
  ]
};