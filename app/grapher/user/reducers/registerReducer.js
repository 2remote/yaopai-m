import { combineReducers } from 'redux';
import { SEND_TEL_REGISTER, RECEIVE_TEL_REGISTER } from '../constant';

const sendTelRegister = (state = false, action) => {
  if (action.type === SEND_TEL_REGISTER) {
    return action.isSendTelSuccess;
  }
  return state;
};

const receiveTelRegister = (state = false, action) => {
  if (action.type === RECEIVE_TEL_REGISTER) {
    return action.isReceiveTelSuccess;
  }
  return state;
};

const registerReducer = combineReducers({
  sendTelRegister,
  receiveTelRegister,
});

export default registerReducer;
