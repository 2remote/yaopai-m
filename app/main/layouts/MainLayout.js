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
      <div className="pure-g">
        <div className="pure-u-1-4" style={{ textAlign: 'center' }}>
          <Link to="/main/work" activeStyle={active}>作品</Link>
        </div>
        <div className="pure-u-1-4" style={{ textAlign: 'center' }}>
          <Link to="/main/discovery" activeStyle={active}>发现</Link>
        </div>
        <div className="pure-u-1-4" style={{ textAlign: 'center' }}>
          <Link to="/main/grapher" activeStyle={active}>摄影师</Link>
        </div>
        <div className="pure-u-1-4" style={{ textAlign: 'center' }}>
          <Link to="/main/user" activeStyle={active}>我的</Link>
        </div>
      </div>
    </nav>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
