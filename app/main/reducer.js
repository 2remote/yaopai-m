import { combineReducers } from 'redux';
/* 引入reducers */
import workReducers from './reducers/workReducers';

const mainRedux = {
  mount: 'main', // 挂载点
  reducer: combineReducers({
    work: workReducers,
  }), // reducers
};

export default mainRedux;
