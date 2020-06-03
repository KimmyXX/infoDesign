const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: false,
    //我这里没有设置contentBase，个人研究contentBase必须指向存在的bundle.js文件所在目录，
    //因为这里是开发模式，所以dist目录并不存在，所以用false.
    //修改为自己的ip地址，手机连同一wifi，可以通过这个地址访问移动端网页，可以通过cmd的ipconfig查看ip地址
    host: "localhost",
    port: "8888",
    inline: true, //webpack官方推荐
    watchOptions: {
      aggregateTimeout: 2000, //浏览器延迟多少秒更新
      poll: 1000 //每秒检查一次变动
    },
    compress: true, //一切服务都启用gzip 压缩
    historyApiFallback: true, //找不到页面默认跳index.html
    hot: true, //启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
    open: true
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(ttf|eot|woff2?|ttf|svg)$/, use: "url-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
};
