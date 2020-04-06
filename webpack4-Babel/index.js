import a from './a';
import b from './b';
import pic from './img/1.jpg';
import './index.css';
import './les.scss';
import "@babel/polyfill";  // 以全局变量的方式引入进来的 会造成全局变量的污染

let object= {};
console.log('%c 🍲 object: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', object);
const arr = [];
console.log('%c 🥠 arr: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', arr);

console.log(pic);

var img = new Image();
img.src = pic;
img.classList.add('pic');
var root =  document.querySelector('#root');
root.append(img);

a();
b();

function kkb(){
    console.log('welcome to KKB');
}

kkb();

// 默认打包 ：以index.js作为入口文件
