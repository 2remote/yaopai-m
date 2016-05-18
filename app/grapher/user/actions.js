import API from 'app/API'
import post from 'app/HttpFactory'
import md5 from 'blueimp-md5'
import base64encode from 'tool/base64'
import { SAVE_USERINFO, SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER, LOGIN_FAILED,
  GET_PG_DATA } from './constant'

// 如果用户登陆成功
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
  post(API.USER.LoginWithSign, { loginname, sign, time }).then(data => {
    if (data.Success) {
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
      dispatch(userLoginFailedAction(data.ErrorMsg))
      throw data.ErrorMsg
    }
  }).catch(error => {
    /* HACK: eslint-disable no-console */
    /* eslint-disable no-console */
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
    /* HACK: eslint-disable no-console */
    /* eslint-disable no-console */
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
    /* HACK: eslint-disable no-console */
    /* eslint-disable no-console */
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
    /* HACK: eslint-disable no-console */
    /* eslint-disable no-console */
    console.error(error)
  })
}


/*
 * USER.GetPgData 获取摄影师详情
 */
const getPgDataAction = (pgData) => ({
  type: GET_PG_DATA,
  pgData,
})

export const getPgDataActionAsycn = (Id) => dispatch => {
  const postData = {
    Id,
    Fields: 'NickName,Sex,Avatar',
  }
  post(API.USER.GetPgData, postData).then(data => {
    if (data.Success) {
      dispatch(getPgDataAction(data))
    }
  }).catch(error => {
    console.error(error)
  })
}
