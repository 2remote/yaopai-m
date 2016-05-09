import React from 'react'

import InputGroup from 'common/InputGroup'

const LoginLayout = props => {
  let name
  let password
  const { user } = props
  return (
    <section style={{ background: '#282828' }}>
      <form onSubmit={() => {
        props.onSubmit(name.value.trim(), password.value.trim())
      }}
      >
      <br />
      <InputGroup
        icon={ 'phone' }
        type={ 'number' }
        placeholder={ '请输入密码' }
        link={{
          text: 'xxxxx',
        }}
        updateValue={ console.log }
      />
      {/* <section className="input-group">
        <i className="phone" />
        <input className="input input-block" type="number" pattern="[0-9]*"
          ref={node => (name = node)} placeholder="请输入密码"
        />
        <span>xxxxx</span>
      </section> */}

      <InputGroup
        icon={ 'lockclosed' }
        type={ 'password' }
        placeholder={ '请输入账号' }
        link={{
          href: '//m.aiyaopai.com/#/find_my_pass_page1',
          text: '忘记密码',
        }}
        updateValue={ console.log }
      />
    {/* <section className="input-group">
        <i className="lockclosed" />
        <input className="input input-block" type="password"
          ref={node => (password = node)} placeholder="请输入账号"
        />
      <a href="//m.aiyaopai.com/#/find_my_pass_page1">忘记密码</a>
      </section> */}
        <br />
        <button className="btn btn-block" type="submit">登陆</button>
      </form>

      <h1>用户昵称：{user.nickname}</h1>
    </section>
  )
}

export default LoginLayout
