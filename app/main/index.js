import React from 'react';
import { Route, IndexRedirect } from 'react-router';
/* 引入layouts */
import MainLayout from './layouts/MainLayout';
/* 引入containers */
import WorkContainer from './containers/WorkContainer';
import DiscoveryContainer from './containers/DiscoveryContainer';
import GrapherContainer from './containers/GrapherContainer';
import UserContainer from './containers/UserContainer';
/* 引入reducers */
import mainReducers from './reducers/reducers';

/**
 * mainRoute factory
 */
const mainRoute = store => {
  const { dispatch } = store;
  const dispatchInit = () => dispatch({
    type: 'main/work/init',
    msg: 'hell yeah!',
  });
  return (
    <Route path="main" component={MainLayout}>
      <IndexRedirect to="work" />
      <Route path="work" component={WorkContainer} />
      <Route onEnter={dispatchInit} path="discovery" component={DiscoveryContainer} />
      <Route path="grapher" component={GrapherContainer} />
      <Route path="user" component={UserContainer} />
    </Route>
  );
};

export { mainRoute, mainReducers };
