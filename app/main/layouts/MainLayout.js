import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MainLayout = props => (
  <div>
    { props.children }
    <nav className="pure-g text-center">
      <div className="pure-u-1-4">
        <i className="icon phone" /><br />
        <Link to="/main/work" activeClassName="active">推荐</Link>
      </div>
      <div className="pure-u-1-4">
        <i className="icon phone" /><br />
        <Link to="/main/discovery" activeClassName="active">求拍</Link>
      </div>
      <div className="pure-u-1-4">
        <i className="icon phone" /><br />
        <Link to="/main/grapher" activeClassName="active">消息</Link>
      </div>
      <div className="pure-u-1-4">
        <i className="icon phone" /><br />
        <Link to="/main/user" activeClassName="active">我的</Link>
      </div>
    </nav>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
