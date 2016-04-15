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
/* 引入route常量 */
import { ROUTE } from './constant';
const { ROOT, ROUTE_TO_WORK, ROUTE_TO_DISCOVERY, ROUTE_TO_GRAPHER, ROUTE_TO_USER } = ROUTE;

/**
 * mainRoute factory
 */
const mainRouteFactory = store => {
  const { dispatch } = store;
  const dispatchInit = () => dispatch(loadMoreWorkAsync('what work?'));
  return (
    <Route path={ ROOT } component={MainLayout}>
      <IndexRedirect to={ ROUTE_TO_WORK } />
      <Route path={ ROUTE_TO_WORK } component={WorkContainer} />
      <Route onEnter={dispatchInit} path={ ROUTE_TO_DISCOVERY } component={DiscoveryContainer} />
      <Route path={ ROUTE_TO_GRAPHER } component={GrapherContainer} />
      <Route path={ ROUTE_TO_USER } component={UserContainer} />
    </Route>
  );
};

const mainRoute = {
  root: ROOT, // 默认接入地址（并没有什么卵用，但是偶尔有用）
  route: mainRouteFactory, // route配置
};

export default mainRoute;
