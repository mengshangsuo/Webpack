// webpack 默认支持 es6的import和export规范  也默认支持CommonJS规范
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');


const prodConfig = {
    mode:"production", // treeshaking的功能在该模式下才会生效
    // sourceMap： 开发环境： 'cheap-module-eval-source-map'， 线上生产环境配置：'cheap-module-source-map'
    devtool:'cheap-module-source-map',
}

module.exports = merge(commonConfig, prodConfig);