const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
    })
];

let output = {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js', // 代码分割
}
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
        })
    );

module.exports = {
    // 配置服务器
    devServer: {
        port: 8888,
        // contentBase: ".",
        historyApiFallback: true,
        inline: true,
        progress: true,
        hot: true,
        NODE_ENV: 'dev'
    },
    entry: {
        index: './index.js',
    },
    output: output,
    module: {
        rules: [{
            test: /\.scss?$/,
            // 将css单独打包，需要plugins
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader', //采用babel模块  
            exclude: /node_modules/, //忽略mode_modules的代码  
            query: {
                presets: ['es2015','react'], //解析es6和react语言 
                plugins: [
                    ["import", { "libraryName": "antd-mobile", "style": "css" }] ,// `style: true` 会加载 less 文件
                    ["recharts"],["transform-class-properties"],["transform-async-to-module-method", {
                        "module": "bluebird",
                        "method": "coroutine"
                      }]
                ]
            },
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
            use: ['url-loader']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }],
    },
    plugins: plugins
};