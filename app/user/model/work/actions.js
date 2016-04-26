import ACTION_TYPE from 'model/work/constant';

/**
 *
**/
const updateWorkPool = workList => {
  const result = {
    type: ACTION_TYPE.UPDATE_WORK_POOL,
    list: [],
  };
  if (workList && workList.length) {
    result.list = workList;
  }
  return result;
};

export default updateWorkPool;
