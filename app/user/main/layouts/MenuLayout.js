import React, { Component } from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

class MenuLayout extends Component {
  componentDidMount() {
    $('#menuLink').click(() => {
      const winHeight = `${$(window).height()}px`
      // TODO 打开侧边导航后禁止页面滚动
      // 在 Chrome 里测试正常，苹果手机测试失败，仍然可以滚动
      $('body').css({ height: winHeight, overflow: 'hidden' })
      $('#mask-menu').show().addClass('fade-toggle')
      $('#menu').addClass('actionsheet-toggle')
    })

    $('#mask-menu').click(() => {
      $('#mask-menu').removeClass('fade-toggle').hide()
      $('#menu').removeClass('actionsheet-toggle')
      $('body').css({ height: '100%', overflow: 'visible' })
    })
  }

  render() {
    return (
      <section>
        {/* Hamburger icon */}
        <div id="menuLink" className="menu-link">
          <i className="menu" id="menuIcon" />
        </div>
        <div id="actionSheet-wrap">
          { /* 透明遮罩层 */ }
          <div className="mask-transition" id="mask-menu"></div>

          <div className="actionsheet" id="menu">
            <header className="menu-slide-header">
              <div className="portrait"><img src="" alt="" /></div>
              <div className="nickname">张晓明</div>
            </header>

            <nav className="menu-slide-nav pure-menu">
              <ul className="pure-menu-list">
                <li className="pure-menu-item nav-list-bar">
                  <Link to="/main/work" activeClassName="active">
                    <i className="menu-icon home" />
                    <div className="menu-button"><span>首页&nbsp;&nbsp;HOME</span></div>
                  </Link>
                </li>
                <li className="pure-menu-item nav-list-bar">
                  <Link to="/main/discovery" activeClassName="active">
                    <i className="menu-icon grid" />
                    <div className="menu-button"><span>作品&nbsp;&nbsp;LIBRARY</span></div>
                  </Link>
                </li>
                <li className="pure-menu-item nav-list-bar">
                  <Link to="/main/grapher" activeClassName="active">
                    <i className="menu-icon camera" />
                    <div className="menu-button"><span>摄影师&nbsp;&nbsp;PARAGRAPHER</span></div>
                  </Link>
                </li>
                <li className="pure-menu-item nav-list-bar">
                  <Link to="/main/user" activeClassName="active">
                    <i className="menu-icon settings" />
                    <div className="menu-button"><span>个人中心&nbsp;&nbsp;USER</span></div>
                  </Link>
                </li>
              </ul>
            </nav>

            <footer className="menu-slide-footer">
              客服热线<br />
              <a href="tel:400-1122-3323">400-1122-3323</a>
            </footer>
          </div>
        </div>
      </section>
    )
  }
}

export default MenuLayout
