import API from 'app/API';
import post from 'app/HttpFactory';
import { SAVE_USERINFO, SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER } from './constant';

// TODO 不用异步的 action 需要 export 吗？

export const userLoginAction = (userData) => ({
  type: SAVE_USERINFO,
  userData,
});

export const userLoginActionAsync = (loginname, password) => dispatch => {
  post(API.USER.Login, { loginname, password }).then(data => {
    if (data.Success) {
      const userData = {
        loginToken: data.LoginToken,
        sessionToken: data.SessionToken,
        userId: data.User.Id,
        nickname: data.User.Name,
        avatar: data.User.Avatar,
        userSex: data.User.Sex,
      };
      dispatch(userLoginAction(userData));
    } else {
      throw data.ErrorMsg;
    }
  }).catch(error => {
    console.error(error);
  });
};

/* User.SendTelRegister 发送手机注册验证码
 * 把用户手机号提交给后台，让后台发验证码到该手机号上
 */
export const sendTelRegisterAction = (isSendTelSuccess) => ({
  type: SEND_TEL_REGISTER,
  isSendTelSuccess,
});

export const sendTelRegisterActionAsync = tel => dispatch => {
  post(API.USER.SendTelRegister, { tel }).then(data => {
    if (data.Success) {
      const isSendTelSuccess = data.Success;
      dispatch(sendTelRegisterAction(isSendTelSuccess));
    } else {
      throw data.ErrorMsg;
    }
  }).catch(error => {
    console.error(error);
  });
};


/* User.ReceiveTelRegister 接收手机注册验证码
 * 验证用户输入的验证码是否正确
 */
export const receiveTelRegisterAction = (isReceiveTelSuccess) => ({
  type: RECEIVE_TEL_REGISTER,
  isReceiveTelSuccess,
});

export const receiveTelRegisterActionAsync = (tel, code, password) => dispatch => {
  const postData = { tel, code, password };
  post(API.USER.ReceiveTelRegister, postData).then(data => {
    if (data.Success) {
      const isReceiveTelSuccess = data.Success;
      dispatch(receiveTelRegisterAction(isReceiveTelSuccess));
    }
  }).catch(error => {
    console.error(error);
  });
};
