import "@babel/polyfill";  // 以全局变量的方式引入进来的 会造成全局变量的污染

import React, { PureComponent } from 'react'

import ReactDom from 'react-dom'

import Child from './Child.jsx'

class App extends PureComponent{
    render(){
        return <div><Child /></div>
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
