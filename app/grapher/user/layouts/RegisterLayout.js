import React from 'react';

const RegisterLayout = props => {
  let tel;
  let code;
  let password;
  return (
    <section>
      <form onSubmit={() => {
        props.onSendTel(tel.value.trim());
      }}
      >
        <input type="number" ref={node => (tel = node)} />
        <label>手机号</label>
        <br />
        <button type="submit">发送验证码</button>
      </form>
      <br />
      <form onSubmit={() => {
        props.onReceiveTel(tel.value, code.value, password.value);
      }}
      >
        <input type="password" ref={node => (password = node)} />
        <label>密码</label>
        <br />
        <input type="password" ref={node => (code = node)} />
        <label>手机验证码</label>
        <br />
        <button type="submit">注册</button>
      </form>
    </section>
  );
};

export default RegisterLayout;
