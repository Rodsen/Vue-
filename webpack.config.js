const path = require ("path")
// const webpack =require("webpack")
const htmlWebpackPlugin =require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
module.exports = {  
    // 配置bundle.js
    entry: path.join (__dirname, "./src/main.js"),
    output: {
        path: path.join (__dirname,"./dist"),  
        filename: "bundle.js"
    },

    // 挂载插件实例对象
    plugins: [ //webpack
        new htmlWebpackPlugin (
            {
                template: path.join(__dirname, "./src/index.html"),
                filename: "index.html"
            }
        ),
        new VueLoaderPlugin()        
    ],
    
    // 配置模板格式
    module: {
      rules: [
        { //vue
          test: /\.vue$/, 
          use: "vue-loader" 
        },
        { //css
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        { //url
          test: /\.(jpg|png|gif|bmp|jpeg)$/, 
          use: "url-loader" 
        },
        { //es6
          test: /\.js$/, 
          use: "babel-loader", 
          exclude: /node_modules/ 
        },
      ]
    },
}

