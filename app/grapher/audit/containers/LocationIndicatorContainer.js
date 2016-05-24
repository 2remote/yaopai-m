import { connect } from 'react-redux'
import LocationIndicatorLayout from 'audit/layouts/LocationIndicatorLayout'
// import { userLoginActionAsync } from 'user/actions'

const mapStateToProps = state => ({
  // 当前path
  currentLocation: state.getIn(['routing', 'locationBeforeTransitions', 'pathname']),
  indicatorList: [{ // sort of a config
    text: '第一步',
    // img: '',
    activeUrl: '/audit/basic',
    activeState: 'active',
  }, {
    text: '第二步',
    // img: '',
    activeUrl: '/audit/realinfo',
    activeState: 'active',
  }, {
    text: '第三步',
    // img: '',
    activeUrl: '/audit/work',
    activeState: 'active',
  }],
})

const LocationIndicatorContainer = connect(
  mapStateToProps
)(LocationIndicatorLayout)

export default LocationIndicatorContainer
