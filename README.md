信息系统课程设计
热更新服务器  
1. npm i webpack-dev-server
2. package.json 修改 dev 为 webpack-dev-server
3. npm run dev
4. 在 http://localhost:8080 打开
解析vue文件
1. npm i -D vue-loader vue-template-compiler
2. webpack.config.js配置
const VueLoaderPlugin = require('vue-loader/lib/plugin');
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugin: [
        new VueLoaderPlugin()
    ]
处理字体文件：
1. 安装 url-loader
2. webpack.config.js 配置


自动生成html  html-webpack-plugin