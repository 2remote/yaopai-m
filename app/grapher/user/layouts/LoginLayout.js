import React from 'react';

const LoginLayout = props => {
  let name;
  let password;
  console.log(props);
  return (
    <div>
      <form onSubmit={() => {
        props.onSubmit(name.value.trim(), password.value.trim());
      }}
      >
        <input type="text" ref={node => name = node} />
        <label>userName</label>
        <br />
        <input type="text" ref={node => password = node} />
        <label>userPassword</label>
        <br />
        <button type="submit">提交</button>
      </form>

      <h1>{props.user.nickname}</h1>
      <h1>{props.user.userSex}</h1>
    </div>
  );
};

export default LoginLayout;
