import { combineReducers } from 'redux'
import { SAVE_USERINFO, LOGIN_FAILED } from '../constant'

const loginSuccess = (state = {}, action) => {
  if (action.type === SAVE_USERINFO) {
    return action.userData
  }
  return state
}

const loginFailed = (state = '', action) => {
  if (action.type === LOGIN_FAILED) {
    return action.errorMsg
  }
  return state
}

const loginReducer = combineReducers({
  loginSuccess,
  loginFailed,
})

export default loginReducer
