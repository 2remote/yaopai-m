import { AUDIT_REALINFO } from 'audit/constant'

const realinfoReducer = (state = {}, action) => {
  if (action.type === AUDIT_REALINFO) {
    return state
  }
  return state
}

export default realinfoReducer
