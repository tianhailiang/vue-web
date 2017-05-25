const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.base.js');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

var config = require('../config');

var env = config.build.env;

module.exports = webpackMerge(commonConfig,{

        module: {
            rules: utils.styleLoaders({
              sourceMap: config.build.productionSourceMap,
              extract: true
            })
        },

         devtool: config.build.productionSourceMap ? '#source-map' : false,

    	 output: {
            path: config.build.assetsRoot,
            filename: utils.assetsPath('js/[name].[chunkhash].js'),
            chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
        },

       
        plugins: [
           
             new webpack.HashedModuleIdsPlugin(),

             new webpack.DefinePlugin({
                'process.env': env
             }),

              new webpack.optimize.UglifyJsPlugin({
                  compress: {
                    warnings: false
                  },
                  sourceMap: true
             }),
              // extract css into its own file
            new ExtractTextPlugin({
              filename: utils.assetsPath('css/[name].[contenthash].css')
            }),
             // Compress extracted CSS. We are using this plugin so that possible
            // duplicated CSS from different components can be deduped.
            new OptimizeCSSPlugin({
              cssProcessorOptions: {
                safe: true
              }
            }),

             new HtmlWebpackPlugin({
                  template: './src/index.ejs'
              }),

            new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                  module.resource &&
                  /\.js$/.test(module.resource) &&
                  module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                  ) === 0
                )
              }
            }),
            
            // extract webpack runtime and module manifest to its own file in order to
            // prevent vendor hash from being updated whenever app bundle is updated
            new webpack.optimize.CommonsChunkPlugin({
              name: 'manifest',
              chunks: ['vendor']
            }),

             new CopyWebpackPlugin([
              {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
              }
            ])  
            
        ]
});