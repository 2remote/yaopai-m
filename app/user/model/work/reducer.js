import Immutable from 'immutable'
import ACTION_TYPE from 'model/work/constant'

/**
 * state should be an object of work id mapping to work info
**/
/* HACK: */
/* eslint-disable new-cap */
const workPoolReducer = (state = Immutable.Map(), action) => {
  if (action.type === ACTION_TYPE.UPDATE_WORK_POOL) {
    let workFromAction = Immutable.Map()
    const list = action.list
    // map id to work info object
    for (let count = 0; count < action.list.size; count++) {
      workFromAction = workFromAction.set(list.getIn([count, 'id']), list.get(count))
    }
    // merge and generate
    return state.merge(workFromAction)
  }
  return state
}

const workRedux = {
  mount: 'work', // 挂载点
  reducer: workPoolReducer,
}

export default workRedux
