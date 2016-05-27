import { SAVE_USERINFO } from 'model/user/constant'
import { combineReducers } from 'redux-immutable'

const UserInfo = (state = {}, action) => {
  if (action.type === SAVE_USERINFO) {
    return action.userData
  }
  return state
}

const UserReducer = combineReducers({
  UserInfo,
})

export default UserReducer
