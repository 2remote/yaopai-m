import { AUDIT_BASIC } from 'audit/constant'

const basicReducer = (state = {}, action) => {
  if (action.type === AUDIT_BASIC) {
    return state
  }
  return state
}

export default basicReducer
