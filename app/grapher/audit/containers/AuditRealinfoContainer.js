import { connect } from 'react-redux'

import AuditRealinfoLayout from 'audit/layouts/AuditRealinfoLayout'

const mapStateToProps = state => {
  /* eslint-disable no-console */
  console.log('AuditRealinfoContainer', state.getIn(['user', 'audit', 'pgData']))
  return {
    test: 'testing',
  }
}

const AuditRealinfoContainer = connect(
  mapStateToProps
)(AuditRealinfoLayout)

export default AuditRealinfoContainer
