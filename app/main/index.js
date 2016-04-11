import React from 'react';
import { Route, IndexRedirect } from 'react-router';
/* 引入containers */
import WorkContainer from './containers/WorkContainer';
import DiscoveryContainer from './containers/DiscoveryContainer';
import GrapherContainer from './containers/GrapherContainer';
import UserContainer from './containers/UserContainer';
/* 引入reducers */
import mainReducers from './reducers';

const MainRoute = (
  <Route path="main">
    <IndexRedirect to="work" />
    <Route path="work" component={WorkContainer} />
    <Route path="discovery" component={DiscoveryContainer} />
    <Route path="grapher" component={GrapherContainer} />
    <Route path="user" component={UserContainer} />
  </Route>
);

export { MainRoute, mainReducers };
