import SAVE_USERINFO from './constant';

const userDataDefault = {
  userData: {},
};

const loginReducer = (state = userDataDefault, action) => {
  if (action.type === SAVE_USERINFO) {
    return {
      userData: action.userData,
    };
  }
  return state;
};

export default loginReducer;
