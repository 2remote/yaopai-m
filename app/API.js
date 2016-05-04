/**
 * API常量
 */
const DEV_ENV = '//dev.api.aiyaopai.com/'
// const PRODUCTION_ENV = '//api.aiyaopai.com/';

// TODO: 临时测试用，建议讨论一下数据的组织（url和Fields合并是不是可行？）
const temp = `${DEV_ENV}?API=Albums.Search`
const tempGet = `${DEV_ENV}?API=Albums.Get`
const Login = `${DEV_ENV}?API=User.Login`
const SendTelRegister = `${DEV_ENV}?API=User.SendTelRegister`       //   让后台发送手机注册验证码
const ReceiveTelRegister = `${DEV_ENV}?API=User.ReceiveTelRegister` // 后台接收手机注册验证码

const API = {
  WORK: {
    SEARCH: temp,
    GET: tempGet,
  },
  USER: {
    Login,
    SendTelRegister,
    ReceiveTelRegister,
  },
}

export default API
