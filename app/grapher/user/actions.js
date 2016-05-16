import API from 'app/API'
import post from 'app/HttpFactory'
import md5 from 'blueimp-md5'
import base64encode from 'tool/base64'
import { SAVE_USERINFO, SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER, LOGIN_FAILED } from './constant'

const userLoginSuccessAction = (userData) => ({
  type: SAVE_USERINFO,
  userData,
})

// 如果用户登陆失败
const userLoginFailedAction = (errorMsg) => ({
  type: LOGIN_FAILED,
  errorMsg,
})

const loginPost = (loginname, sign, time, dispatch) => {
  console.log('dadwadwadadwada')
  post(API.USER.LoginWithSign, { loginname, sign, time }).then(data => {
    if (data.Success) {
      console.log(12131313131)
      const userData = {
        loginToken: data.LoginToken,
        sessionToken: data.SessionToken,
        userId: data.User.Id,
        nickname: data.User.Name,
        avatar: data.User.Avatar,
        userSex: data.User.Sex,
      }
      dispatch(userLoginSuccessAction(userData))
    } else {
      // 为什么这个 dispatch 没执行
      console.log(23)
      dispatch(userLoginFailedAction(data.ErrorMsg))
      throw data.ErrorMsg
    }
  }).catch(error => {
    console.error(error)
  })
}


export const userLoginActionAsync = (loginname, password) => dispatch => {
  post(API.USER.GetSysTime).then(data => {
    if (data.Success) {
      const serverTime = data.ServerTime
      const sign = md5(base64encode(`${serverTime}${md5(password)}`))
      loginPost(loginname, sign, serverTime, dispatch)
    } else {
      throw data.ErrorMsg
    }
  }).catch(error => {
    console.error(error)
  })
}

/* User.SendTelRegister 发送手机注册验证码
 * 把用户手机号提交给后台，让后台发验证码到该手机号上
 */
const sendTelRegisterAction = (isSendTelSuccess) => ({
  type: SEND_TEL_REGISTER,
  isSendTelSuccess,
})

export const sendTelRegisterActionAsync = tel => dispatch => {
  post(API.USER.SendTelRegister, { tel }).then(data => {
    if (data.Success) {
      const isSendTelSuccess = data.Success
      dispatch(sendTelRegisterAction(isSendTelSuccess))
    } else {
      throw data.ErrorMsg
    }
  }).catch(error => {
    console.error(error)
  })
}


/* User.ReceiveTelRegister 接收手机注册验证码
 * 验证用户输入的验证码是否正确
 */
const receiveTelRegisterAction = (isReceiveTelSuccess) => ({
  type: RECEIVE_TEL_REGISTER,
  isReceiveTelSuccess,
})

export const receiveTelRegisterActionAsync = (tel, code, password) => dispatch => {
  const postData = { tel, code, password }
  post(API.USER.ReceiveTelRegister, postData).then(data => {
    if (data.Success) {
      const isReceiveTelSuccess = data.Success
      dispatch(receiveTelRegisterAction(isReceiveTelSuccess))
    }
  }).catch(error => {
    console.error(error)
  })
}
