/* For Async Actions */
import fetch from 'isomorphic-fetch';
/* 用于生成 action creator 的函数*/
import { makeActionCreator } from '../tool/tool.js';/* @王路怎么省去前面的‘../’ */
/* Action Types */
import { ACTION_TYPE } from './constant';
const { LOAD_MORE_WORK, LOAD_MORE_GRAPHER } = ACTION_TYPE;

/* Actions */
export const loadMoreWork = makeActionCreator(LOAD_MORE_WORK, 'msg');
/* 上面那行代码其实和下面的效果一样*/
// export const loadMoreWork = msg => ({
//   type: LOAD_MORE_WORK,
//   msg,
// });

/**
 * Sample Async Action namely: the thunk
 * 要配合redux-thunk这个middleware一起食用
 * ref: https://github.com/gaearon/redux-thunk
 */
export const loadMoreWorkAsync = () => dispatch => {
  /* TODO: 请暂时无视我如此拙劣的dispatch行为 */
  /* 1. fetch之前，可以先发个pending的action */
  dispatch({
    type: LOAD_MORE_WORK,
    msg: 'pending',
  });
  fetch('imgs/test.json').then(resp => {
      // console.log('[resp]', resp.status);
    if (resp.status === 200) return resp.json();
    throw new Error('not 200 this time'); // 美滴很
  }).then(json => {
    /* 2. 异步结束了，发结果action */
    dispatch({
      type: LOAD_MORE_WORK,
      msg: json.name,
    });
  }).catch(error => {
    /* 3. 倒霉催的，发报错action */
    dispatch({
      type: LOAD_MORE_WORK,
      msg: error,
    });
  });
};

export const loadMoreGrapher = () => ({
  type: LOAD_MORE_GRAPHER,
});

// export default { loadMoreWork, loadMoreGrapher };
