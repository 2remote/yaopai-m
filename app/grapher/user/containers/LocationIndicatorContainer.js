import { connect } from 'react-redux'
import LocationIndicatorLayout from 'user/layouts/LocationIndicatorLayout'
// import { userLoginActionAsync } from 'user/actions'

const mapStateToProps = state => ({
  // 当前path
  currentLocation: state.routing.locationBeforeTransitions.pathname,
  indicatorList: [{ // sort of a config
    text: '第一步',
    // img: '',
    activeUrl: '/user/test',
    activeState: 'active',
  }, {
    text: '第二步',
    // img: '',
    activeUrl: '/user/test2',
    activeState: 'active',
  }, {
    text: '第三步',
    // img: '',
    activeUrl: '/user/test3',
    activeState: 'active',
  }],
})

const LocationIndicatorContainer = connect(
  mapStateToProps
)(LocationIndicatorLayout)

export default LocationIndicatorContainer
