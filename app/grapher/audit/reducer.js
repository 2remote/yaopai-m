import { combineReducers } from 'redux-immutable'
import basicReducer from 'audit/reducers/basicReducer'
import realinfoReducer from 'audit/reducers/realinfoReducer'
import workReducer from 'audit/reducers/workReducer'

const auditReducer = {
  mount: 'audit',
  reducer: combineReducers({
    basic: basicReducer,
    realinfo: realinfoReducer,
    work: workReducer,
  }),
}

export default auditReducer
