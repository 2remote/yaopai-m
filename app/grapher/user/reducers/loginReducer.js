import { SAVE_USERINFO } from '../constant'

const loginInfo = (state = {}, action) => {
  if (action.type === SAVE_USERINFO) {
    return action.userData
  }
  return state
}

export default loginInfo
