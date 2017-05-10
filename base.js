var webpack = require('webpack');
var path = require('path');

var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackChunkHash = require("webpack-chunk-hash");

var HtmlWebpackPlugin = require('html-webpack-plugin');

 var InlineManifestWebpackPlugin=require("inline-manifest-webpack-plugin");

 var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');


 function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = function(env) {
    return {

         context: path.resolve(__dirname, "src"),

        entry: {
           
            main: './main.js',
            vendor: 'moment'
          

        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },

         resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src')
            }

          },
         
         module: {
            rules: [
              {
                  test: /\.css$/,
                  use: ExtractTextPlugin.extract({
                    use: [
                           'css-loader'
                        
                      ]
                 })
              },

                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                     options: {
                           // vue-loader options go here vue文件里css自动添加后缀
                         postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
                      }
                    
                 },

               {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                      loader: 'babel-loader',
                     
                    }]
                },

                {
                    test: /\.(woff2?|eot|svg|ttf|otf)(\?.*)?$/,
                    use:[

                         
                          {
                              loader: 'url-loader',
                              options: {
                                limit: 10000                     
                              }

                          }

                      ]
                    
                }

             ]
        },  

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name:['vendor', 'manifest'] // 指定公共 bundle 的名字。
            }),
            

              new WebpackChunkHash(),

                    new ChunkManifestPlugin({
              filename: "manifest.json",
              manifestVariable: "webpackManifest"
            }),

           new HtmlWebpackPlugin({
             template: './index.ejs'
           }),

           new InlineManifestWebpackPlugin({
              name: 'webpackManifest'
           }),

            new ExtractTextPlugin('styles.css'),


        ]
    }
}