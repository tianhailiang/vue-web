var webpack = require('webpack');
var path = require('path');

var autoprefixer = require('autoprefixer');

var config = require('../config');

var utils = require('./utils');

 function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
   
        // context: path.resolve(__dirname, "src"),

        entry: {
           
            main: './src/main.js',
            vendor: 'moment'
          
        },
        output: {
            path: config.build.assetsRoot,
            filename: '[name].js',
            publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
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
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                },

                {
                  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                  }
                }

             ]
        }  

       
      
   
}


