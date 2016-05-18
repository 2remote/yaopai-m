import React from 'react'
import { Route, IndexRedirect } from 'react-router'
/* login */
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

/* audit */
import AuditContainerOne from './containers/AuditContainerOne'
import AuditContainerTwo from './containers/AuditContainerTwo'
import AuditContainerThree from './containers/AuditContainerThree'

import LocationIndicator from './containers/LocationIndicatorContainer'


const userFactory = (/* store*/) => (
  <Route path="user">
    <Route path="login" component={ LoginContainer } />
    <Route path="register" component={ RegisterContainer } />

    <Route path="indicator" component={ LocationIndicator } />
    <Route path="indicator2" component={ LocationIndicator } />
    <Route path="indicator3" component={ LocationIndicator } />

    <Route path="audit">
      <IndexRedirect to="audit_1" />
      <Route path="audit_1" component={ AuditContainerOne } />
      <Route path="audit_2" component={ AuditContainerTwo } />
      <Route path="audit_3" component={ AuditContainerThree } />
    </Route>
  </Route>
)

export default userFactory
