import React from 'react'

const LoginLayout = props => {
  let name
  let password
  const { user } = props
  return (
    <section>
      <form onSubmit={() => {
        props.onSubmit(name.value.trim(), password.value.trim())
      }}
      >
        <input type="number" ref={node => (name = node)} />
        <label>手机号</label>
        <br />
        <input type="password" ref={node => (password = node)} />
        <label>密码</label>
        <br />
        <button type="submit">登陆</button>
      </form>

      <h1>用户昵称：{user.nickname}</h1>
    </section>
  )
}

export default LoginLayout
