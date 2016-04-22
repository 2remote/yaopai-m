import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class MainLayout extends Component {
  componentDidMount() {
    $('#menuLink').click(e => {
      e.preventDefault();
      $('#layout').toggleClass('active');
      $('#menu').toggleClass('active');
      $('#menuLink').toggleClass('active');
    });
  }

  render() {
    return (
      <div id="layout">
        { this.props.children }
        { /* Menu toggle */ }
        <a href="#menu" id="menuLink" className="menu-link">
          { /* Hamburger icon */ }
          <span></span>
        </a>
        <nav id="menu">
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
                <i className="icon phone" />
                {/* <a href="#" className="pure-menu-link">我的</a> */}
                <Link to="/main/user" activeClassName="active">我的</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
