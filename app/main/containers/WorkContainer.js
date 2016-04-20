import { connect } from 'react-redux';

import WorkLayout from 'main/layouts/WorkLayout';
import { loadMoreWorkAsync } from 'main/actions';

const mapStateToProps = state => ({
  work: state.main.work,
});

const mapDispatchToProps = dispatch => ({
  onLoadMore: (idx, size) => {
    dispatch(loadMoreWorkAsync(idx, size));
  },
});

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLayout);

export default WorkContainer;
