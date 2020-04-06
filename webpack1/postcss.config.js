// module.exports = {
//     plugins:[require("autoprefixer")]
// }

module.exports = ({ file, options, env }) => {
    console.log('%c 🍖 env: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', env);
    console.log('%c 🌰 options: ', 'font-size:20px;background-color: #465975;color:#fff;', options);
    console.log('%c 🍧 file: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', file);
    
    return ({
        parser: file.extname === '.sss' ? 'sugarss' : false,
        plugins: {
        //   'postcss-import': { root: file.dirname },
        //   'postcss-cssnext': options.cssnext ? options.cssnext : false,
          'autoprefixer': env == 'production' ? options.autoprefixer : false,
        //   'cssnano': env === 'production' ? options.cssnano : false
        }
      })
}