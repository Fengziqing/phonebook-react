import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

//then方法注册的回调函数，为其提供一个response对象作为参数。
//response对象包含与HTTP GET请求的响应相关的所有基本数据，其中包括返回的数据、状态代码和头信息。
// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// axios
//   .get('http://localhost:3001/persons')
//   .then(response => {
//     const notes = response.data
//     ReactDOM.createRoot(document.getElementById('root')).render(<App />)
//   })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)