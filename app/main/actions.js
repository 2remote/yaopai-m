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

export const loadMoreWorkAsync = () => dispatch => (
  fetch('imgs/test.json').then(resp => {
      // console.log('[resp]', resp.status);
    if (resp.status === 200) return resp.json();
    throw new Error('not 200 this time');
  }).then(json => {
    dispatch({
      type: LOAD_MORE_WORK,
      msg: json.name,
    });
  }).catch(error => {
    dispatch({
      type: LOAD_MORE_WORK,
      msg: error,
    });
  })
);


export const loadMoreGrapher = () => ({
  type: LOAD_MORE_GRAPHER,
});

// export default { loadMoreWork, loadMoreGrapher };
