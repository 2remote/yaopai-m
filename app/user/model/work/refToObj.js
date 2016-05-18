import Immutable from 'immutable'
/**
 * refList: reference to a list of works
**/
/* HACK: */
/* eslint-disable new-cap */
const getWorks = (state, refList) => {
  let result = Immutable.List()
  if (refList && refList.size) {
    for (let i = 0; i < refList.size; i++) {
      const realDeal = state.getIn(['work', refList.get(i)])
      if (realDeal) {
        result = result.push(realDeal)
      }
    }
  }
  return result
}

export default getWorks
