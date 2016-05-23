import API from 'app/API'
import post from 'app/HttpFactory'
import md5 from 'blueimp-md5'
import base64encode from 'tool/base64'
import { SAVE_USERINFO, SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER,
  GET_PG_DATA, CHANGE_AVATAR, CHANGE_INFO } from './constant'
import Immutable from 'immutable'
// action 制造器
const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}

// 如果用户登陆成功
const userLoginSuccessAction = makeActionCreator(SAVE_USERINFO, 'userData')
// 相当于
// const userLoginSuccessAction = (SAVE_USERINFO, userData) => ({
//   type: SAVE_USERINFO,
//   userData
// })

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


export const userLoginActionAsync = (loginname, password) => dispatch => {
  post(API.USER.GetSysTime).then(data => {
    const serverTime = data.ServerTime
    const sign = md5(base64encode(`${serverTime}${md5(password)}`))
    loginPost(loginname, sign, serverTime, dispatch)
  }).catch(error => {
    console.error(error)
  })
}

/* User.SendTelRegister 发送手机注册验证码
 * 把用户手机号提交给后台，让后台发验证码到该手机号上
 */
const sendTelRegisterAction = makeActionCreator(SEND_TEL_REGISTER, 'isSendTelSuccess')

export const sendTelRegisterActionAsync = tel => dispatch => {
  post(API.USER.SendTelRegister, { tel }).then(data => {
    const isSendTelSuccess = data.Success
    dispatch(sendTelRegisterAction(isSendTelSuccess))
  }).catch(error => {
    console.error(error)
  })
}


/* User.ReceiveTelRegister 接收手机注册验证码
 * 验证用户输入的验证码是否正确
 */
const receiveTelRegisterAction = makeActionCreator(RECEIVE_TEL_REGISTER, 'isReceiveTelSuccess')

export const receiveTelRegisterActionAsync = (tel, code, password) => dispatch => {
  const postData = { tel, code, password }
  post(API.USER.ReceiveTelRegister, postData).then(data => {
    const isReceiveTelSuccess = data.Success
    dispatch(receiveTelRegisterAction(isReceiveTelSuccess))
  }).catch(error => {
    console.error(error)
  })
}


/*
 * USER.GetPgData 获取摄影师详情
 */
const getPgDataAction = makeActionCreator(GET_PG_DATA, 'pgData')

export const getPgDataActionAsycn = (Id) => dispatch => {
  const postData = {
    Id,
    Fields: 'NickName,Sex,Avatar,CityId',
  }
  post(API.USER.GetPgData, postData).then(data =>
    dispatch(getPgDataAction(data))
  ).catch(error => {
    console.error(error)
  })
}


/*
 * User.ChangeInfo 修改登陆用户信息
 */
const isChangeInfoSuccessAction = makeActionCreator(CHANGE_INFO, 'isChangeInfoSuccess')

export const changeInfoActionAsycn = (Nickname, Sex, Location) => dispatch => {
  const postData = { Nickname, Sex, Location }
  post(API.USER.UserChangeInfo, postData)
     .then(data => dispatch(isChangeInfoSuccessAction(data.Success)))
     .catch(error => console.error(error))
}


 /*
  * User.ChangeAvatar 修改登陆用户头像
  */
const isChangeAvatarSuccessAction = makeActionCreator(CHANGE_AVATAR, 'isChangeAvatarSuccess')

export const changeAvatarActionAsycn = Avater => dispatch => {
  const postData = { Avater }
  post(API.USER.UserChangeAvatar, postData)
      .then(data => dispatch(isChangeAvatarSuccessAction(data.Success)))
      .catch(error => console.error(error))
}
