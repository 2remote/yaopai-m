import { AUDIT_WORK } from 'audit/constant'

const workReducer = (state = {}, action) => {
  if (action.type === AUDIT_WORK) {
    return state
  }
  return state
}

export default workReducer
