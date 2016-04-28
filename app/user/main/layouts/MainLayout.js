import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import SelectLayout from './SelectLayout.jsx';

class MainLayout extends Component {
  componentDidMount() {
    $('#menuLink').click(e => {
      e.preventDefault();
      const winHeight = `${$(window).height()}px`;
      // TODO 打开侧边导航后禁止页面滚动
      // 在 Chrome 里测试正常，苹果手机测试失败，仍然可以滚动
      $('body').css({ height: winHeight, overflow: 'hidden' });
      $('#mask').show().addClass('fade_toggle');
      $('#menu').addClass('actionsheet_toggle');
    });

    $('#mask').click(() => {
      $('#mask').removeClass('fade_toggle').hide();
      $('#menu').removeClass('actionsheet_toggle');
      $('body').css({ height: '100%', overflow: 'visible' });
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 50, backgroundColor: 'red', position: 'relative' }}>

        {this.props.children}
        <SelectLayout />
        {/* Hamburger icon */}
        <a href="#menu" id="menuLink" className="menu-link">
          <i className="menu" id="menuIcon" />
        </a>
        <div id="actionSheet_wrap">
          { /* 透明遮罩层 */ }
          <div className="mask_transition" id="mask"></div>

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
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
