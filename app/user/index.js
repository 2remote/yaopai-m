import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import LoginLayout from './LoginLayout';
import OrderLayout from './OrderLayout';
import PurseLayout from './PurseLayout';

const UserRoute = (
  <Route path="user">
    <IndexRedirect to="login" />
    <Route path="login" component={LoginLayout} />
    <Route path="order" component={OrderLayout} />
    <Route path="purse" component={PurseLayout} />
  </Route>
);

export default UserRoute;
