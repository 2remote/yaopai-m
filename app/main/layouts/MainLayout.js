import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

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
      <div>
        {this.props.children}
        {/* Hamburger icon */}
        <a href="#menu" id="menuLink" className="menu-link">
          <i className="icon menu_icon" id="menuIcon" />
        </a>
        <div id="actionSheet_wrap">
          { /* 透明遮罩层 */ }
          <div className="mask_transition" id="mask"></div>

          <nav className="actionsheet" id="menu">
            <div className="pure-menu">
              <a className="pure-menu-heading" href="#">YAOPAI</a>
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <i className="icon phone" />
                  <Link to="/main/work" activeClassName="active">推荐</Link>
                </li>
                <li className="pure-menu-item">
                  <i className="icon phone" />
                  <Link to="/main/discovery" activeClassName="active">求拍</Link>
                </li>
                <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
                  <i className="icon phone" />
                  <Link to="/main/grapher" activeClassName="active">消息</Link>
                </li>

                <li className="pure-menu-item">
                  <i className="icon phone" /> {/* <a href="#" className="pure-menu-link">我的</a> */}
                  <Link to="/main/user" activeClassName="active">我的</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
