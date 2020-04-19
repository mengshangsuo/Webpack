// 引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 引入node木块
const path = require('path');

module.exports={
    // 入口
    entry: './index.js',
    //输出目录
    output: {
        // 公共路径设置
        //publicPath:'https://cdn.baidu.com',
        //打包后的文件名称：
        filename: 'indexBulid.js',
        //只接受绝对路径
        path: path.resolve(__dirname, '../dist')
    },
     //模块
     module: {
        // 遇到不认识的模块就在这里写
        rules: [
            // file-loader
            {
                //     test: /\.jpg$/,
                //     use: {
                //         loader: 'file-loader', //就是把一个木块放在另一个目录里面，并且把位置反应回来，也可以打包字体
                //         //打包之后的设置
                //         options: {
                //             // name是打包前的模块名称，  ext是打包前的格式
                //             name: "[name].[ext]",
                //             // 为你的文件配置自定义 output 输出目录
                //             outputPath: 'images/',

                //         }
                //     }
            },
            // url-loader
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader', // 可以限定模块的体积，根据文件体积判断是否打包成base64
                    //打包之后的设置
                    options: {
                        // name是打包前的模块名称，  ext是打包前的格式
                        name: "[name].[ext]",
                        // 为你的文件配置自定义 output 输出目录
                        outputPath: 'images/',
                        // limit :限制输出的文件大小， 图片的实际大小，如果小于2048是base64图片文件，大于2048就打包出来实际的图片
                        limit: 2048
                    }
                }
            },
            // style-loader css-loader
            {
                test: /\.(css)$/,
                use: [
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                //   require('postcss-import')({ root: loader.resourcePath }),
                                //   require('postcss-cssnext')(),
                                require('autoprefixer')(),
                                //   require('cssnano')()
                            ]
                        }
                    }
                ]
            },
            // scss-loader  
            {
                test: /\.scss$/,
                //  loader执行顺序，从后向前执行
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles scss to CSS
                },]
            },
            // babel-loader 转换作用
            {
                test: /\.jsx?$/,
                //  loader执行顺序，从后向前执行
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader", // creates style nodes from JS strings
                    // options里面的配置可以直接挪到 .babelrc中  不适用options配置项  可以在.babelrc文件中配置
                    
                    // options:{
                        // presets:[
                        //     [
                        //         '@babel/preset-env',
                        //         {
                        //             useBuiltIns:'usage', // 按需加载  实验性的功能
                        //         }
                        //     ]
                        // ],
                        // plugins:  [
                        //     "@babel/plugin-transform-runtime",
                        //     {
                        //       "absoluteRuntime": false,
                        //       "corejs": 2,
                        //       "helpers": true,
                        //       "regenerator": true,
                        //       "useESModules": false,
                        //       "version": "7.0.0-beta.0"
                        //     }
                        //   ], // 不会造成全局污染 原型链条上的方法不会被转化
                        // }
                
                }]
            }
        ]
    },
    // 插件  在webpack运行到一定阶段的时候  帮你做一些事情 类似于生命周期
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: './index.html',
            filename: "index.html"
        }),
        // 在打包之前  将生成目录先删除一下
        new CleanWebpackPlugin(),
        // 拆分css  mini-css-extract-plugin
        new MiniCssExtractPlugin(),
    ],
}