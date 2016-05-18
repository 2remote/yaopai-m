import React from 'react'
import { Link } from 'react-router'

const UserEntryLayout = () => (
  <section className="entry-container">
    <div>

    </div>
    <nav style={{ fontSize: '28px' }}>
      <Link to="/user/login" >登录</Link>
      <br />
      <br />
      <br />

      <Link to="/user/register" >注册</Link>
    </nav>
  </section>
)

export default UserEntryLayout
