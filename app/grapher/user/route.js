import React from 'react'
import { Route } from 'react-router'
/* login */
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

/* user panel */
import UserPanelLayout from './layouts/UserPanelLayout'
import VertifyResultLayout from './layouts/VertifyResultLayout'

/* eslint-disable no-unused-vars */
const userFactory = store => (
  <Route path="user">
    <Route path="login" component={ LoginContainer } />
    <Route path="register" component={ RegisterContainer } />
    <Route path="userpanel" component={ UserPanelLayout } />
    <Route path="vertifyresult" component={ VertifyResultLayout } />
  </Route>
)

export default userFactory
