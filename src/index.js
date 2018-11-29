import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'antd/dist/antd.css'
import App from '@/App'
import rootReducer from '@/reducers'
import {setCurrentUser} from '@/actions'
import jwt from 'jwt-simple'
const store = createStore(rootReducer,applyMiddleware(thunk))

/*
如果 jwtToken 存在，会添加 token 到 axios 的请求头，之后设置当前用户。
 */
if (localStorage.jwtToken) {
  console.log(jwt.decode(localStorage.jwtToken, 'jstSecret'))
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken, 'jstSecret')))
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)