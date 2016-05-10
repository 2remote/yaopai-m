import React from 'react'

import InputGroup from 'common/InputGroup'

const LoginLayout = props => {
  let name
  let password
  const { user } = props
  return (
    <section style={{ background: '#282828' }}>
      <form onSubmit={() => {
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

      <h1>用户昵称：{user.nickname}</h1>
    </section>
  )
}

export default LoginLayout
