import { connect } from 'react-redux';
import getWorks from 'model/work/refToObj';

import WorkLayout from 'main/layouts/WorkLayout';
import { loadMoreWorkAsync } from 'main/actions';

const mapStateToProps = state => {
  const result = {
    work: state.main.work,
    lbt: state.routing.locationBeforeTransitions,
  };
  result.work.list = getWorks(state, result.work.list);
  return result;
};

const mapDispatchToProps = dispatch => ({
  onLoadMore: (idx, size, conditions) => {
    dispatch(loadMoreWorkAsync(idx, size, conditions));
  },
});

/* 把 state 注入到 WorkLayout 上，此时的 state 结构为：

state = {
  main: {
    work: {...}
  },
  routing: {
    locationBeforeTransitions: {...}
  }
  ...
};

*/
const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLayout);

export default WorkContainer;
