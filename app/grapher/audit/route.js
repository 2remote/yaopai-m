import React from 'react'
import { Route } from 'react-router'

import AuditBasicContainer from 'audit/containers/AuditBasicContainer'
import AuditRealinfoContainer from 'audit/containers/AuditRealinfoContainer'
import AuditWorkContainer from 'audit/containers/AuditWorkContainer'

/**
 * 认证三个步骤
 * 所有认证的请求统一跳转到audit，audit上的onEnter根据逻辑跳转step 1,2,3
 * step 1
 * basic: 基本信息填入
 * step 2
 * realinfo: 实名信息
 * step 3
 * work: 作品
**/
const auditFactory = store => {
  /* HACK: eslint-disable no-console */
  /* eslint-disable no-console */
  const { getState } = store
  // let userId = getState().user.login.loginInfo.userId
  const userId = 34 // 假设我已经拿到了 ID 😂
  console.log('so that I\'m using this fake userId', userId)

  /**
   * 根据用户数据判断跳哪一步认证
  **/
  const auditInit = () => {
    const userState = getState().getIn(['user', 'audit'])
    // 3 steps: basic, realinfo, work
    // TODO: 这里要处理当前用户认证步骤的逻辑
    // TODO: 临时跳step 1
    /* eslint-disable no-console */
    console.log('[should check user info]', userState)
    // TODO: 这个问题怎么解决？
    // replace('/user/audit/basic')
  }

  return (
    <Route path="audit" onEnter={auditInit}>
      <Route path="basic" component={ AuditBasicContainer } />
      <Route path="realinfo" component={ AuditRealinfoContainer } />
      <Route path="work" component={ AuditWorkContainer } />
    </Route>
  )
}

export default auditFactory
