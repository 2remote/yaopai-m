import API from 'app/API'
import post from 'app/HttpFactory'
import Immutable from 'immutable'
import { SAVE_USERINFO } from './constant'

const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}

// 如果用户登陆成功
const userLoginSuccessAction = makeActionCreator(SAVE_USERINFO, 'userData')

const loginPost = (loginname, sign, time, dispatch) => {
  post(API.USER.LoginWithSign, { loginname, sign, time }).then(data => {
    const userData = Immutable.fromJS({
      loginToken: data.LoginToken,
      sessionToken: data.SessionToken,
      userId: data.User.Id,
      nickname: data.User.Name,
      avatar: data.User.Avatar,
      userSex: data.User.Sex,
      userType: data.User.TypeString,
      signature: data.User.Signature,
    })
    dispatch(userLoginSuccessAction(userData))
  }).catch(error => {
    console.error(error)
  })
}

export default loginPost
