/* 1. 创建store用的 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
/* 2. Middlewares */
import thunk from 'redux-thunk';
/* 3. 引入reducers */
import mainReducers from './main/reducer';

/* 这里组装reducers */
const reducers = {
  routing: routerReducer,
};
reducers[mainReducers.mount] = mainReducers.reducer;

/* **************************************************************** */
/**
 * 临时放这里一个logger，测试用
 */
 // TODO: 临时关闭no-console选项
 /* eslint-disable no-console */
const logger = store => next => action => {
  console.log('[dispatching]', action);
  const result = next(action);
  console.log('[next state]', store.getState());
  return result;
};

/* 这是另外一种（旧的）写法 */
// const logger = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log('dispatching', action);
//       const result = next(action);
//       console.log('next state', store.getState());
//       return result;
//     };
//   };
// };
/* **************************************************************** */

/* 这里创建store */
const store = createStore(
  /* 1. 创建store用的reducer */
  combineReducers(reducers),
  /* 2. 默认state */
  // TODO: 要不要做点文章？
  {},
  /* 3. Middleware */
  compose(
    // thunk用来处理传入的thunk(就是明明是action，却是个function)
    // 所以放在logger前面
    applyMiddleware(thunk),
    // TODO: debug用的logger，启用的时候建议挂上TODO，方便找
    applyMiddleware(logger),
    // 这个用来启动Redux开发者工具，放最后
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
