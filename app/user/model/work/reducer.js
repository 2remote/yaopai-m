import ACTION_TYPE from 'model/work/constant';

/**
 * state should be an object of work id mapping to work info
**/
const workPoolReducer = (state = {}, action) => {
  if (action.type === ACTION_TYPE.UPDATE_WORK_POOL) {
    const workFromAction = {};
    // map id to work info object
    for (let count = 0; count < action.list.length; count++) {
      workFromAction[action.list[count].id] = action.list[count];
    }
    // merge and generate
    return Object.assign({}, state, workFromAction);
  }
  return state;
};

const workRedux = {
  mount: 'work', // 挂载点
  reducer: workPoolReducer,
};

export default workRedux;
