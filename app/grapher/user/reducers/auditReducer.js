// import { combineReducers } from 'redux'
import { GET_PG_DATA } from '../constant'

const gpDataReducer = (state = {}, action) => {
  if (action.type === GET_PG_DATA) {
    return action.pgData
  }
  return state
}

export default gpDataReducer
