// import { combineReducers } from 'redux';
import fetch from 'isomorphic-fetch';

/**
 * 这个方法处理作品列表刷新
 */
const workReducer = (state = [], action) => {
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

export default workReducer;
