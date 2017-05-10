const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

var path = require('path');

var webpack = require('webpack');

module.exports = function(env) {
      


    return  webpackMerge(commonConfig(),{

    	 output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },

       
        plugins: [
           
             new webpack.HashedModuleIdsPlugin(),

             new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('prod')
                }
            }),

              new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
            
        ]
    })
}