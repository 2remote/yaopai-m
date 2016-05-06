import { connect } from 'react-redux'
import getWorks from 'model/work/refToObj'

import WorkLayout from 'main/layouts/WorkLayout'
import { loadMoreWorkAsync } from 'main/actions'

const mapStateToProps = state => {
  const result = {
    work: Object.assign({}, state.main.work),
    lbt: state.routing.locationBeforeTransitions,
  }
  result.work.list = getWorks(state, result.work.list)
  return result
}

const mapDispatchToProps = dispatch => ({
  onLoadMore: (idx, size, conditions) => {
    dispatch(loadMoreWorkAsync(idx, size, conditions))
  },
})

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLayout)

export default WorkContainer
