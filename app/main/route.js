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
  const dispatchInit = type => {
    switch (type) {
      case ROUTE_TO_WORK: // 初始化作品
        dispatch(loadMoreWorkAsync(1, 10));
        break;
      case ROUTE_TO_DISCOVERY: // 初始化作品
        dispatch(loadMoreWorkAsync(1, 10));
        break;
      case ROUTE_TO_GRAPHER: // 初始化作品
        dispatch(loadMoreWorkAsync(1, 10));
        break;
      default:
    }
  };
   /* 使用onEnter来做初始化 */
  return (
    <Route path={ ROOT } component={MainLayout}>
      <IndexRedirect to={ ROUTE_TO_WORK } />
      { /* 作品列表 */ }
      <Route path={ ROUTE_TO_WORK } component={WorkContainer}
        onEnter={ () => dispatchInit(ROUTE_TO_WORK) }
      />
      { /* 发现 */ }
      <Route path={ ROUTE_TO_DISCOVERY } component={DiscoveryContainer}
        onEnter={ () => dispatchInit(ROUTE_TO_WORK) }
      />
      { /* 摄影师列表 */ }
      <Route path={ ROUTE_TO_GRAPHER } component={GrapherContainer}
        onEnter={ () => dispatchInit(ROUTE_TO_WORK) }
      />
      { /* 用户 */ }
      <Route path={ ROUTE_TO_USER } component={UserContainer} />
    </Route>
  );
};

const mainRoute = {
  root: ROOT, // 默认接入地址（并没有什么卵用，但是偶尔有用）
  route: mainRouteFactory, // route配置
};

export default mainRoute;
