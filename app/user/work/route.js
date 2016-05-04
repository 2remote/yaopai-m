import React from 'react'
import { Route } from 'react-router'
/* 引入layouts */
import WorkShowLayout from './WorkShowLayout'
/* 引入containers */
/* 引入route常量 */
import { ROUTE } from './constant'
const { ROOT } = ROUTE

/**
 * mainRoute factory
 */
const WorkRouteFactory = store => {
  const { dispatch } = store
  const initWork = wid => {
    dispatch({
      type: 'SOME_WORK',
      wid,
    })
  }

   /* 使用onEnter来做初始化 */
   // TODO: 我擦，这个报错怎么解决？我先临时禁用了
   /* eslint-disable react/prop-types */
  return (
    <Route path={ROOT} component={WorkShowLayout}
      onEnter= { props => {
        initWork(props.params.wid)
      }}
    />
  )
}

const workRoute = {
  root: ROOT, // 默认接入地址（并没有什么卵用，但是偶尔有用）
  route: WorkRouteFactory, // route配置
}

export default workRoute
