/* 引入scss */
import './index.scss'
/* 解决移动端点击 300 毫秒延迟 */
import 'react-fastclick'

/* 1. 基本React引入 */
import React from 'react'
import { render } from 'react-dom'
/* 2. 路由相关 */
import { Router, Route, hashHistory/** , IndexRedirect **/ } from 'react-router'
/* 3. 接入redux */
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
/* 4. Redux store -- 有且仅有一个 */
import store from './store'
/* 5. 开始引入不同模块 */
import userFactory from './user/route'
import auditFactory from 'audit/route'

/* ref: https://github.com/reactjs/react-router-redux/#how-it-works */
/* history + store (redux) → react-router-redux → enhanced history → react-router */
/* react-immutable again: https://github.com/gajus/redux-immutable */
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  },
})

/**
 * 主App
 */
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        {userFactory(store)}
        {auditFactory(store)}
      </Route>
    </Router>
  </Provider>
)

render(
  <App />,
  document.getElementById('app')
)
