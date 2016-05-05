/**
 * refList: reference to a list of works
**/
const getWorks = (state, refList) => {
  const result = []
  if (refList && refList.length) {
    for (let i = 0; i < refList.length; i++) {
      const realObj = state.work[refList[i]]
      if (realObj) {
        result.push(realObj)
      }
    }
  }
  return result
}

export default getWorks
