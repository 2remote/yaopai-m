import React from 'react';
import { Route, IndexRedirect } from 'react-router';
/* 引入layouts */
import MainLayout from './layouts/MainLayout';
/* 引入containers */
import WorkContainer from './containers/WorkContainer';
import DiscoveryContainer from './containers/DiscoveryContainer';
import GrapherContainer from './containers/GrapherContainer';
import UserContainer from './containers/UserContainer';
import { loadMoreWorkAsync } from './actions';

/**
 * mainRoute factory
 */
const mainRouteFactory = store => {
  const { dispatch } = store;
  const dispatchInit = () => dispatch(loadMoreWorkAsync('what work?'));
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

const mainRoute = {
  root: 'main', // 默认接入地址（并没有什么卵用，但是偶尔有用）
  route: mainRouteFactory, // route配置
};

export default mainRoute;
