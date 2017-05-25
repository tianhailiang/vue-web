
var utils = require('./utils');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.base.js');

var webpack = require('webpack');
var config = require('../config');

var HtmlWebpackPlugin = require('html-webpack-plugin');


// add hot-reload related code to entry chunks
Object.keys(commonConfig.entry).forEach(function (name) {
  commonConfig.entry[name] = ['./build/dev-client'].concat(commonConfig.entry[name])
});

module.exports = webpackMerge(commonConfig,{
         module: {
           rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
         },
          // cheap-module-eval-source-map is faster for development
	        devtool: "cheap-eval-source-map",
          

	       

         plugins: [
                new webpack.DefinePlugin({
                'process.env': config.dev.env
               }),
               new webpack.NamedModulesPlugin(),
                // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
                new webpack.HotModuleReplacementPlugin(),
                 new HtmlWebpackPlugin({
                  template: './src/index.ejs'
                }),

             ]
});






