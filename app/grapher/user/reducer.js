import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';

const userReducers = {
  mount: 'user',
  reducer: combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),
};

export default userReducers;
