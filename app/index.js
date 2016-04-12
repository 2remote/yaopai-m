/* 1. 基本React引入 */
import React from 'react';
import ReactDOM from 'react-dom';
/* 2. 路由相关 */
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
/* 3. 接入redux */
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* 4. 开始引入不同模块 */
import { MainRoute, mainReducers } from './main';
import WorkRoute from './work';
import GrapherRoute from './grapher';
import UserRoute from './user';
import AboutRoute from './about';

/**
 * 所以Reducers可以多层嵌套的吧
 */
const nameReducers = combineReducers({
  work: mainReducers,
  firstName: (firstName = 'John') => firstName,
  lastName: (lastName = 'Porter') => lastName,
});

const sampleReducer = combineReducers({
  name: nameReducers,
  routing: routerReducer,
});

let store = createStore(
  /* 1. 创建store用的reducer */
  sampleReducer,
  /* 2. 默认state */
  {},
  /* 3. Middleware */
  window.devToolsExtension ? window.devToolsExtension() : f => f // 这个用来启动Redux开发者工具
);

const history = syncHistoryWithStore(hashHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="main" />
        { /* 主页 */MainRoute }
        { /* 作品 */WorkRoute }
        { /* 摄影师 */GrapherRoute }
        { /* 用户 */UserRoute }
        { /* 关于 */AboutRoute }
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
