/* 1. 创建store用的 */
import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'

/* 2. Middlewares */
import thunk from 'redux-thunk'
/* 3. 引入reducers */
import userReducers from 'user/reducer'
import auditReducers from 'audit/reducer'

/* 4. Immutable下的react-router-redux的reducer */
/* 参考：https://github.com/gajus/redux-immutable */
import Immutable from 'immutable'

/* 5. A redux middleware which saves the state to localStorage */
/* 参考：https://github.com/pirosikick/redux-save-state */
import saveState from 'redux-save-state/localStorage'

import { LOCATION_CHANGE } from 'react-router-redux'

const initialStateForRoute = Immutable.fromJS({
  locationBeforeTransitions: null,
})

const routeReducer = (state = initialStateForRoute, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload,
    })
  }
  return state
}

/* 这里组装reducers */
const reducers = {
  routing: routeReducer,
  [userReducers.mount]: userReducers.reducer,
  [auditReducers.mount]: auditReducers.reducer,
}


/* ---------------------------------------------------------------- */
/**
 * 临时放这里一个logger，测试用
 */
 // TODO: 临时关闭no-console选项
 /* eslint-disable no-console */
const logger = store => next => action => {
  console.log('[dispatching]', action)
  const result = next(action)
  console.log('[next state]', store.getState())
  console.log('下面是储存在 localStorage 里的 state', JSON.parse(localStorage.appState))
  return result
}

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
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
/* HACK: */
/* eslint-disable new-cap */

/* 初始化 state  */
const appState = JSON.parse(localStorage.appState)
const initState = Immutable.fromJS(appState) || Immutable.Map()
console.log(initState.toJS())
/* 控制台会报错：「Warning: You cannot PUSH the same path using hash history」
 *  用下面的方法虽然解决的报错，但是……pathname 都给重置了，一旦刷新页面 url 就变成初始的 localhost:8080 了
 *  initState = initState.setIn(['routing', 'locationBeforeTransitions', 'pathname'], '')
*/


/* 这里创建store */
const store = createStore(
  /* 1. 创建store用的reducer */
  combineReducers(reducers),
  /* 2. 默认state */
  initState,
  /* 3. Middleware */
  compose(
    // thunk用来处理传入的thunk(就是明明是action，却是个function)
    // 所以放在logger前面
    applyMiddleware(thunk),
    // TODO: debug用的logger，启用的时候建议挂上TODO，方便找
    applyMiddleware(logger),
    // 每次 state 发生改变时把新的 state 储存到 localStorage 里
    applyMiddleware(saveState('appState')),
    // 这个用来启动Redux开发者工具，放最后
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
