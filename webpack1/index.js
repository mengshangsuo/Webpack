import a from './a';
import b from './b';
import pic from './img/1.jpg';
import './index.css';
import './les.scss';

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
