/* 1. 基本React引入 */
import React from 'react';
import ReactDOM from 'react-dom';
/* 2. 路由相关 */
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
/* 3. 接入redux */
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

let sampleReducer = combineReducers({
  name: (name='John', action) => name,
  routing: routerReducer
});

let store = createStore(sampleReducer);

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
