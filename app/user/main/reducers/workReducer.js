import Immutable from 'immutable'
import { ACTION_TYPE } from 'main/constant'
const { LOAD_MORE_WORK } = ACTION_TYPE

/**
 * route变动后会dispatch一个 @@router/LOCATION_CHANGE 类型的action
 * 其中action.payload.pathname是跳转后的url，可以用来捕获和处理
 * action.payload.query是_k之后的get参数
**/
/* HACK: */
/* eslint-disable new-cap */
const workDefault = Immutable.Map({
  total: 0,
  index: 1,
  pages: 0,
  size: 10,
  list: [],
})

/**
 * 初始化作品页
 */
const addMoreWork = (state = workDefault, action) => {
  if (action.type === LOAD_MORE_WORK) {
    const result = state.merge(
      action.payload.get('index') > 1 ?
      action.payload.updateIn('list', list => state.get('list').concat(list)) :
      action.payload
    )
    return result
  }
  return state
}

const workReducer = addMoreWork

export default workReducer
