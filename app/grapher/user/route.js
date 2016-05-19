import React from 'react'
import { Route, IndexRedirect } from 'react-router'
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

import { getPgDataActionAsycn } from './actions'


const userFactory = store => {
  const { dispatch/* , getState */ } = store
  // let userId = getState().user.login.loginInfo.userId
  const userId = 34 // 假设我已经拿到了 ID 😂

  const dispatchInit = type => {
    switch (type) {
      case 'AUDIT_ONE': {
        dispatch(getPgDataActionAsycn(userId))
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
      <Route path="audit">
        <IndexRedirect to="audit_1" />
        <Route path="audit_1" component={ AuditContainerOne }
          onEnter={() => dispatchInit('AUDIT_ONE')}
        />
        <Route path="audit_2" component={ AuditContainerTwo }
          onEnter={() => dispatchInit('AUDIT_TWO')}
        />
        <Route path="audit_3" component={ AuditContainerThree }
          onEnter={() => dispatchInit('AUDIT_THREE')}
        />
      </Route>
    </Route>
  )
}

export default userFactory
