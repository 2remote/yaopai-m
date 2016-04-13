import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import LoginLayout from './LoginLayout';
import OrderLayout from './OrderLayout';

const UserRoute = (
  <Route path="user">
    <IndexRedirect to="login" />
    <Route path="login" component={LoginLayout} />
    <Route path="order" component={OrderLayout} />
  </Route>
);

export default UserRoute;
