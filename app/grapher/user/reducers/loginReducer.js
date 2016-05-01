import { SAVE_USERINFO } from '../constant';

const loginReducer = (state = {}, action) => {
  if (action.type === SAVE_USERINFO) {
    return action.userData;
  }
  return state;
};

export default loginReducer;
