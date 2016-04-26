// import { combineReducers } from 'redux';
import { ACTION_TYPE } from 'main/constant';
const { LOAD_MORE_WORK } = ACTION_TYPE;

/**
 * route变动后会dispatch一个 @@router/LOCATION_CHANGE 类型的action
 * 其中action.payload.pathname是跳转后的url，可以用来捕获和处理
 * action.payload.query是_k之后的get参数
 */

const workDefault = {
  total: 0,
  index: 1,
  pages: 0,
  size: 10,
  list: [],
};

/**
 * 初始化作品页
 */
const addMoreWork = (state = workDefault, action) => {
  if (action.type === LOAD_MORE_WORK) {
    const result = Object.assign({}, state, {
      total: action.total,
      index: action.index,
      pages: action.pages,
      size: action.size,
      list: action.index > 1 ? state.list.concat(action.list) : action.list,
    });
    return result;
  }
  return state;
};

const workReducer = addMoreWork;

export default workReducer;
