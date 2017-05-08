
const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

var webpack = require('webpack');

var path = require('path');

module.exports = function (env) {
  

  return  webpackMerge(commonConfig(),{

  	        devtool: "cheap-eval-source-map",

  	        devServer: {
  	        	  hot: true,
      				  // contentBase: path.join(__dirname, "dist"),
      				  compress: true,
      				  port: 8888,
      				  host: "0.0.0.0",
                historyApiFallback: true
             },

           plugins: [
                 new webpack.NamedModulesPlugin(),
                  new webpack.HotModuleReplacementPlugin(),

               ]
            })

}