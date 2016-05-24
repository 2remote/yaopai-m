import React, { PropTypes } from 'react'

import LocationIndicatorContainer from 'audit/containers/LocationIndicatorContainer'

const AuditRealinfoLayout = ({ test }) => (
  <div>
    <LocationIndicatorContainer />
    <div>
      {test}
    </div>
  </div>
)

AuditRealinfoLayout.propTypes = {
  test: PropTypes.string,
}

export default AuditRealinfoLayout
