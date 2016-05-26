import { connect } from 'react-redux'

import AuditWorkLayout from 'audit/layouts/AuditWorkLayout'

const mapStateToProps = state => {
  /* eslint-disable no-console */
  console.log('AuditWorkContainer', state.getIn(['user', 'audit', 'pgData']))
  return {
    test: 'testing',
  }
}

const AuditWorkContainer = connect(
  mapStateToProps
)(AuditWorkLayout)

export default AuditWorkContainer
