/* For Async Actions */
import fetch from 'isomorphic-fetch';
/* Action Types */
const LOAD_MORE_WORK = 'load_more_work';
const LOAD_MORE_GRAPHER = 'load_more_grapher';
/* Actions */
export const loadMoreWork = msg => ({
  type: LOAD_MORE_WORK,
  msg,
});

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
