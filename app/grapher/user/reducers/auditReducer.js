import { combineReducers } from 'redux'
import { GET_PG_DATA, CHANGE_AVATAR, CHANGE_INFO } from '../constant'

const pgData = (state = {}, action) => {
  if (action.type === GET_PG_DATA) {
    return action.pgData
  }
  return state
}

const changeInfo = (state = false, action) => {
  if (action.type === CHANGE_INFO) {
    return action.isChangeInfoSuccess
  }
  return state
}

const changeAvatar = (state = false, action) => {
  if (action.type === CHANGE_AVATAR) {
    return action.isChangeAvatarSuccess
  }
  return state
}

const auditReducer = combineReducers({
  pgData,
  changeInfo,
  changeAvatar,
})

export default auditReducer
