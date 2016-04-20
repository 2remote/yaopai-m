import { connect } from 'react-redux';

import WorkLayout from 'main/layouts/WorkLayout';
import { loadMoreWorkAsync } from 'main/actions';

const mapStateToProps = state => ({
  work: state.main.work,
  lbt: state.routing.locationBeforeTransitions,
});

const mapDispatchToProps = dispatch => ({
  onLoadMore: (idx, size, conditions) => {
    dispatch(loadMoreWorkAsync(idx, size, conditions));
  },
});

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLayout);

export default WorkContainer;
