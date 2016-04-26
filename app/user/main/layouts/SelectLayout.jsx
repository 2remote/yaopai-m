import React, { Component/* ,PropTypes*/ } from 'react';
// import { Link } from 'react-router';

class SelectLayout extends Component {
  render() {
    return (
      <div>
        <ul className="select-panel">
          <li><a>拍摄地点<i className="down" /></a></li>
          <li><a>拍摄系列<i className="down" /></a></li>
          <li><a>价位筛选<i className="down" /></a></li>
        </ul>
        <ul className="select-item-panel">
          <li></li>
        </ul>
      </div>
    );
  }
}

export default SelectLayout;
