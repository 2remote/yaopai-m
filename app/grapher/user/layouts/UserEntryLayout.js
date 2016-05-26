import React from 'react'
import { Link } from 'react-router'

const UserEntryLayout = () => (
  <section className="entry-container">
    <nav className="entry-nav">
      <Link to="/user/login" >登录</Link>
      <Link to="/user/register" >注册</Link>
    </nav>
  </section>
)

export default UserEntryLayout
