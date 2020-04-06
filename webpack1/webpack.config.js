// webpack 默认支持 es6的import和export规范  也默认支持CommonJS规范

const path = require('path');
module.exports = {
    // 入口
    entry: './index.js',
    //输出目录
    output: {
        // 公共路径设置
        //publicPath:'https://cdn.baidu.com',
        //打包后的文件名称：
        filename: 'index.js',
        //只接受绝对路径
        path: path.resolve(__dirname, './build')
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
                        limit:2048
                    }
                }
            },
            // style-loader css-loader
            {
                test:/\.(css)$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader',
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
            {test: /\.scss$/,
            //  loader执行顺序，从后向前执行
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles scss to CSS
            },]
        }

        ]

    }
}