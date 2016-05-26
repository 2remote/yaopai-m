import React, { PropTypes } from 'react'

import LocationIndicatorContainer from 'audit/containers/LocationIndicatorContainer'

const AuditWorkLayout = ({ test }) => (
  <div>
    <LocationIndicatorContainer />
    <div>
      {test}
    </div>
  </div>
)

AuditWorkLayout.propTypes = {
  test: PropTypes.string,
}

export default AuditWorkLayout
