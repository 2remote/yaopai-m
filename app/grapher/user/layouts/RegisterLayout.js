import React from 'react'
import UserEntryLayout from './UserEntryLayout'
import { RouteTransition, presets } from 'react-router-transition'
import InputGroup from 'common/InputGroup'

const RegisterLayout = props => {
  let tel
  let code
  let password
  return (
    <section>
      <UserEntryLayout />
      <RouteTransition { ...presets.slideRight } >
        <form onSubmit={() => {
          event.preventDefault()
          props.onSendTel(name)
        }}
        >
          <InputGroup
            icon={ 'phone' }
            type={ 'number' }
            placeholder={ '请输入手机号' }
            link={{
              text: '手机号输入错误',
            }}
            updateValue={ text => {tel = text} }
          />
          <button type="submit">发送验证码</button>
        </form>
        <form onSubmit={() => {
          event.preventDefault()
          props.onReceiveTel(tel, code, password)
        }}
        >
          <InputGroup
            icon={ 'phone' }
            type={ 'number' }
            placeholder={ '请输入验证码' }
            link={{
              text: '验证码输入错误',
            }}
            updateValue={ text => {code = text} }
          />
          <InputGroup
            icon={ 'phone' }
            type={ 'number' }
            placeholder={ '请输入密码' }
            link={{
              text: '密码输入错误',
            }}
            updateValue={ text => {password = text} }
          />
          <div className="btn-block"><button className="btn-dark" type="submit">注册</button></div>
        </form>
      </RouteTransition>
    </section>
  )
}

export default RegisterLayout
