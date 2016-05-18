import { combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'
import registerReducer from './reducers/registerReducer'
import gpDataReducer from './reducers/auditReducer'

const userReducers = {
  mount: 'user',
  reducer: combineReducers({
    login: loginReducer,
    register: registerReducer,
    audit: gpDataReducer,
  }),
}

export default userReducers
