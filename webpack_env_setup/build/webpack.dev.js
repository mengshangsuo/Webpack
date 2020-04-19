// webpack 默认支持 es6的import和export规范  也默认支持CommonJS规范

// 引入插件
const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    // mode:"production", // treeshaking的功能在该模式下才会生效

    // 插件  在webpack运行到一定阶段的时候  帮你做一些事情 类似于生命周期
    plugins: [
        // 启动webpack 模块热更新的木块
        new webpack.HotModuleReplacementPlugin(),
    ],
    // sourceMap： 开发环境： 'cheap-module-eval-source-map'， 线上生产环境配置：'cheap-module-source-map'
    devtool:'cheap-module-eval-source-map',
    //devser
    devServer: { 
        contentBase:  "./dist",
        open: true,
        port: 9000,
        // 开启模块热更新
        hot:true,
        // hotOnly ：开启浏览器自动刷新
        hotOnly: true,
        // 开发的时候，跨域代理配置,前后端分离开发
        proxy:{
            '/api':{
                target:'http://localhost:9092'
            }
        },
        // tree shaking 摇树功能， 只打包使用的函数和模块，不打包整个文件中没有使用的模块；
        // 在webpack2.0以上版本才支持， 且只支持ES模块语法。
        // mode:"production",配合使用
        // package.json文件中的 "sideEffects":false/["*.css"],  sideEffects忽略打包时候的ES模块监视
        optimization:{
            usedExports:true
        }
      }
}