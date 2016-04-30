import { combineReducers } from 'redux';
import { SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER } from '../constant';

const sendTelRegisterReducer = (state = false, action) => {
  if (action.type === SEND_TEL_REGISTER) {
    return {
      isSendTelSuccess: action.isSendTelSuccess,
    };
  }
  return state;
};

const receiveTelRegisterReducer = (state = false, action) => {
  if (action.type === RECEIVE_TEL_REGISTER) {
    return {
      isReceiveTelSuccess: action.isReceiveTelSuccess,
    };
  }
  return state;
};

const registerReducer = combineReducers({
  sendTelRegisterReducer,
  receiveTelRegisterReducer
});

export default sendTelRegisterReducer;
