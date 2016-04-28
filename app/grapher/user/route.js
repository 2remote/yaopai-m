import React from 'react';
import { Route } from 'react-router';
import LoginContainer from './containers/LoginContainer';

const userFactory = store => {
  return (
    <Route path="user">
      <Route path="login" component={ LoginContainer }>

      </Route>
    </Route>
  );
};

export default userFactory;
