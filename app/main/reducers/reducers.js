import { combineReducers } from 'redux';
import fetch from 'isomorphic-fetch';

/**
 * 这个方法处理作品列表刷新
 */
const fetchReducer = (state = [], action) => {
  if (action.type === 'test') {
    return dispatch =>
      fetch('imgs/test.json').then(resp => {
        // console.log('[resp]', resp.status);
        if (resp.status === 200) return resp.json();
        throw new Error('not 200 this time');
      }).then(json => {
        dispatch({
          type: 'Make me happy',
          name: json.name,
        });
      }).catch(error => {
        dispatch({
          type: 'Make me upset',
          msg: error,
        });
      });
  }
  return state;
};

/**
 * route变动后会dispatch一个 @@router/LOCATION_CHANGE 类型的action
 * 其中action.payload.pathname是跳转后的url，可以用来捕获和处理
 */
const initReducer = (state = '', action) => {
  if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname === '/main/work') {
    console.log('[initReducer]', action);
  }
  return state;
};

const workReducer = combineReducers({
  fetchReducer,
  initReducer,
});

export default workReducer;