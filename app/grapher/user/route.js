import React from 'react'
import { Route } from 'react-router'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

const userFactory = store => {
  return (
    <Route path="user">
      <Route path="login" component={ LoginContainer } />
      <Route path="register" component={ RegisterContainer } />
    </Route>
  )
}

export default userFactory
