import { combineReducers } from 'redux-immutable'
import userReducer from 'model/user/reducers/userReducer'

const modelReducers = {
  mount: 'model',
  reducer: combineReducers({
    user: userReducer,
  }),
}

export default modelReducers
