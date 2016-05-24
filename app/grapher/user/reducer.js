import { combineReducers } from 'redux-immutable'
import loginInfo from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'

const userReducers = {
  mount: 'user',
  reducer: combineReducers({
    login: loginInfo,
    register: registerReducer,
  }),
}

export default userReducers
