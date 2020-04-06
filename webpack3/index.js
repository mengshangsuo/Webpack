import a from './a';
import b from './b';

a();
// 默认打包 ：以index.js作为入口文件

console.log(module.hot);
 if (module.hot){
   module.hot.accept('./b',function(){
       document.body.removeChild(document.getElementById('number'))
   }) 
}

// HMR 默认对css木块支持较好，对js木块需要额外处理，
// 通过module.hot.accept来对需要监控的模块进行监控