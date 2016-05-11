import React from 'react'
import { RouteTransition, presets } from 'react-router-transition'
import UserEntryLayout from './UserEntryLayout'
import InputGroup from 'common/InputGroup'

const LoginLayout = props => {
  let name
  let password
  const { user } = props
  return (
    <section>
      <UserEntryLayout />

      <RouteTransition { ...presets.slideLeft } >
        <form className="form-box " onSubmit={() => {
          props.onSubmit(name, password)
        }}
        >
          <InputGroup
            icon={ 'phone' }
            type={ 'number' }
            placeholder={ '请输入账号' }
            link={{
              text: '手机号输入错误',
            }}
            updateValue={ text => {name = text} }
          />

          <InputGroup
            icon={ 'lockclosed' }
            type={ 'password' }
            placeholder={ '请输入密码' }
            link={{
              href: '//m.aiyaopai.com/#/find_my_pass_page1',
              text: '忘记密码',
            }}
            updateValue={ text => {password = text} }
          />

          <button className="btn btn-block" type="submit">登陆</button>
        </form>
      </RouteTransition>
    </section>
  )
}

export default LoginLayout
