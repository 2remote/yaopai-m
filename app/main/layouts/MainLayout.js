import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const active = {
  color: 'red',
};

const MainLayout = props => (
  <div>
    { props.children }
    <nav>
      <hr />
      <ul className="navbar">
        <li><Link to="/main/work" activeStyle={active}>作品</Link></li>
        <li><Link to="/main/discovery" activeStyle={active}>发现</Link></li>
        <li><Link to="/main/grapher" activeStyle={active}>摄影师</Link></li>
        <li><Link to="/main/user" activeStyle={active}>我的</Link></li>
      </ul>
    </nav>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
