/* 1. 基本React引入 */
import React from 'react';
import ReactDOM from 'react-dom';
/* 2. 路由相关 */
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
/* 3. 接入redux */
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/**
 * 所以Reducers可以多层嵌套的吧
 */
const nameReducers = combineReducers({
  firstName: (firstName='John', action) => firstName,
  lastName: (lastName='Porter', action) => lastName
});

const sampleReducer = combineReducers({
  name: nameReducers,
  routing: routerReducer
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

const Sample = props => (
  <div>
    <h1>Sample Container</h1>
    {props.children}
  </div>
);

const SampleContent = props => (
  <div>Hello from sample content</div>
);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Sample}>
        <Route path="content" component={SampleContent} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
