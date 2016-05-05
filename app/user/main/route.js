import React from 'react'
import { Route, IndexRedirect } from 'react-router'
/* 引入layouts */
import MainLayout from './layouts/MainLayout'
/* 引入containers */
import WorkContainer from './containers/WorkContainer'
import DiscoveryContainer from './containers/DiscoveryContainer'
import GrapherContainer from './containers/GrapherContainer'
import UserContainer from './containers/UserContainer'
import { loadMoreWorkAsync } from './actions'
/* 引入route常量 */
import { ROUTE } from './constant'
const { ROOT, ROUTE_TO_WORK, ROUTE_TO_DISCOVERY, ROUTE_TO_GRAPHER, ROUTE_TO_USER } = ROUTE

/**
 * mainRoute factory
 */
const mainRouteFactory = store => {
  const { dispatch } = store
  const dispatchInit = (type, query) => {
    switch (type) {
      case ROUTE_TO_WORK: {// 初始化作品
        // 首先处理query参数
        // 要处理的条件：
        /* 1. 城市：CityId */
        /* 2. 类型：CategoryId */
        /* 3. 价格区间：PriceStart - PriceEnd */
        const conditions = {
          CityId: query.city, // 城市id
          CategoryId: query.cate, // 类型id
          PriceStart: query.pstart, // 价格：最低价格
          PriceEnd: query.pend, // 价格：最高价格
        }
        dispatch(loadMoreWorkAsync(1, 10, conditions))
        break
      }
      case ROUTE_TO_DISCOVERY: // 初始化作品
        // dispatch(loadMoreWorkAsync(1, 10));
        break
      case ROUTE_TO_GRAPHER: // 初始化作品
        // dispatch(loadMoreWorkAsync(1, 10));
        break
      default:
    }
  }
   /* 使用onEnter来做初始化 */
   // TODO: 我擦，这个报错怎么解决？我先临时禁用了
   /* eslint-disable react/prop-types */
  return (
    <Route path={ ROOT } component={MainLayout}>
      <IndexRedirect to={ ROUTE_TO_WORK } />
      { /* 作品列表 */ }
      <Route path={ ROUTE_TO_WORK } component={WorkContainer}
        onEnter={ props => dispatchInit(ROUTE_TO_WORK, props.location.query) }
      />
      { /* 发现 */ }
      <Route path={ ROUTE_TO_DISCOVERY } component={DiscoveryContainer}
        onEnter={ props => dispatchInit(ROUTE_TO_WORK, props.location.query) }
      />
      { /* 摄影师列表 */ }
      <Route path={ ROUTE_TO_GRAPHER } component={GrapherContainer}
        onEnter={ props => dispatchInit(ROUTE_TO_WORK, props.location.query) }
      />
      { /* 用户 */ }
      <Route path={ ROUTE_TO_USER } component={UserContainer} />
    </Route>
  )
}

const mainRoute = {
  root: ROOT, // 默认接入地址（并没有什么卵用，但是偶尔有用）
  route: mainRouteFactory, // route配置
}

export default mainRoute
