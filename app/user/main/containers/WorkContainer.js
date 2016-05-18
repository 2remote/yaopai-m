import { connect } from 'react-redux'
import Immutable from 'immutable'
import getWorks from 'model/work/refToObj'

import WorkLayout from 'main/layouts/WorkLayout'
import { loadMoreWorkAsync } from 'main/actions'

const mapStateToProps = state => {
  /* HACK: */
  /* eslint-disable new-cap */
  let result = Immutable.Map({
    work: state.get('main').get('work'),
    lbt: state.get('routing').get('locationBeforeTransitions'),
  })
  /* FIXME: 这里要把work.list的引用调整为数据 */
  result = result.updateIn(['work', 'list'], list => getWorks(state, list))
  return result.toJS()
}

const mapDispatchToProps = dispatch => ({
  onLoadMore: (idx, size, conditions) => {
    dispatch(loadMoreWorkAsync(idx, size, Immutable.fromJS(conditions)))
  },
})

const WorkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLayout)

export default WorkContainer
