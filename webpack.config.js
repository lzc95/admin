const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")  //从js中分离css
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: path.join(__dirname,'src/index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/, //匹配jsx和js结尾的文件
          use: {
              loader: 'babel-loader',
              // 当loader传入的参数过多时，可以添加options对象
              options: {
                  cacheDirectory: true //cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
              }
          },
          include: path.join(__dirname,'src') 
        },
        {
          test: /.css$/,
          use: [MiniCssExtractPlugin.loader,'css-loader'] //调用loader时是从右到左编译的。
        },
        {
          test: /.(scss|sass)$/,
          use:[MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
        },
        {
          test: /.less$/,
          use:[
            {loader: MiniCssExtractPlugin.loader},
            {loader: 'css-loader'}, 
            {
              loader: 'less-loader',
            }
          ],
          include: /node_modules/
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname,'./src/index.tmpl.html')
      }),
      new MiniCssExtractPlugin({
        filename: "css/style.css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, './dist'),  //服务器读取文件目录
      port: 9001,  //运行的端口号
      inline: true, // 文件修改后实时刷新
      historyApiFallback: true,  //设为true,所有的页面都将跳转到index.html
      proxy: {
      }  
  }
}