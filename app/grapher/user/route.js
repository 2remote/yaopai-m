import React from 'react'
import { Route } from 'react-router'
/* login */
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

/* audit */
import AuditContainerOne from './containers/AuditContainerOne'
import AuditContainerTwo from './containers/AuditContainerTwo'
import AuditContainerThree from './containers/AuditContainerThree'

import LocationIndicator from './containers/LocationIndicatorContainer'

import UserPanelLayout from './layouts/UserPanelLayout'
import VertifyResultLayout from './layouts/VertifyResultLayout'

import { getPgDataActionAsync } from './actions'


const userFactory = store => {
  const { dispatch, getState } = store
  // let userId = getState().user.login.loginInfo.userId
  const userId = 34 // 假设我已经拿到了 ID 😂

  const auditInit = () => {
    const userState = getState().getIn(['user', 'audit'])
    // 3 steps: basic, realinfo, work
    // TODO: 这里要处理当前用户认证步骤的逻辑
    // TODO: 临时跳step 1
    /* eslint-disable no-console */
    console.log('[should check user info]', userState)
  }

  const dispatchInit = type => {
    switch (type) {
      case 'AUDIT_ONE': {
        dispatch(getPgDataActionAsync(userId))
        break
      }

      case 'AUDIT_TWO':
        // dispatch()
        break

      case 'AUDIT_THREE':
        // dispatch()
        break


      default:
    }
  }

  return (
    <Route path="user">
      <Route path="login" component={ LoginContainer } />
      <Route path="register" component={ RegisterContainer } />

      <Route path="userPanel" component={ UserPanelLayout } />
      <Route path="vertifyResult" component={ VertifyResultLayout } />


      <Route path="indicator" component={ LocationIndicator } />
      <Route path="indicator2" component={ LocationIndicator } />
      <Route path="indicator3" component={ LocationIndicator } />

      {/* 认证三个步骤 */}
      {/* 所有认证的请求统一跳转到audit，audit上的onEnter根据逻辑跳转step 1,2,3 */}
      {/* step 1 */}
      {/* basic: 基本信息填入 */}
      {/* step 2 */}
      {/* realinfo: 实名信息 TODO: 这个翻译？ */}
      {/* step 3 */}
      {/* work: 作品 */}
      <Route path="audit" onEnter={ auditInit }>
        <Route path="basic" component={ AuditContainerOne }
          onEnter={() => dispatchInit('AUDIT_ONE')}
        />
        <Route path="realname" component={ AuditContainerTwo }
          onEnter={() => dispatchInit('AUDIT_TWO')}
        />
        <Route path="work" component={ AuditContainerThree }
          onEnter={() => dispatchInit('AUDIT_THREE')}
        />
      </Route>
    </Route>
  )
}

export default userFactory
