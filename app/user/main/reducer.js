import { combineReducers } from 'redux-immutable'

/* 引入reducers */
import workReducer from './reducers/workReducer'

const mainReducers = {
  mount: 'main', // 挂载点
  reducer: combineReducers({
    work: workReducer,
  }), // reducers
}

export default mainReducers
