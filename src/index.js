import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'antd/dist/antd.css'
import App from '@/App'
import rootReducer from '@/reducers'
import {setCurrentUser} from '@/actions'
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '@/utils/setAuthorizationToken'
const store = createStore(rootReducer,applyMiddleware(thunk))

/*
如果 jwtToken 存在，会添加 token 到 axios 的请求头，之后设置当前用户。
 */
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)