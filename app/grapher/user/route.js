import React from 'react'
import { Route } from 'react-router'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import LocationIndicator from './containers/LocationIndicatorContainer'

const userFactory = () => (
  <Route path="user">
    <Route path="login" component={ LoginContainer } />
    <Route path="register" component={ RegisterContainer } />
    <Route path="indicator" component={ LocationIndicator } />
    <Route path="indicator2" component={ LocationIndicator } />
    <Route path="indicator3" component={ LocationIndicator } />
  </Route>
)

export default userFactory
