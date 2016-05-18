import Immutable from 'immutable'
import ACTION_TYPE from 'model/work/constant'

/**
 *
**/
/* HACK: */
/* eslint-disable new-cap */
const updateWorkPool = workList => {
  const result = {
    type: ACTION_TYPE.UPDATE_WORK_POOL,
    list: Immutable.List(),
  }
  if (workList && workList.size) {
    result.list = workList
  }
  return result
}

export default updateWorkPool
