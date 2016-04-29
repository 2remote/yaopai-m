import API from 'app/API';
import post from 'app/HttpFactory';
import { SAVE_USERINFO } from './constant';

export const userLoginAction = (userData) => ({
  type: SAVE_USERINFO,
  userData,
});

export const userLoginActionAsync = (loginname, password) => dispatch => {
  const postData = {
    loginname,
    password,
  };
  post(API.USER.LOGIN, postData).then(data => {
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
