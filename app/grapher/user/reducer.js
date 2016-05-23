import { combineReducers } from 'redux-immutable'
import loginInfo from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import auditReducer from './reducers/auditReducer'

const userReducers = {
  mount: 'user',
  reducer: combineReducers({
    login: loginInfo,
    register: registerReducer,
    audit: auditReducer,
  }),
}

export default userReducers
