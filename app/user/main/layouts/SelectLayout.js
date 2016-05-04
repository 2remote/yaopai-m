import React, { Component/* ,PropTypes*/ } from 'react';
// import { Link } from 'react-router';
import $ from 'jquery';
import { scrollEvent } from 'tool/scroll';

class SelectLayout extends Component {
  componentDidMount() {
    const lock = {
      scrollEvent: false,
      scrollUp: false,
      scrollDown: false,
    };
    const scrollUp = () => {
      if (lock.scrollEvent || lock.scrollUp) return;
      lock.scrollEvent = true;
      lock.scrollUp = true;
      $('#select-component').fadeIn(200, () => {
        lock.scrollDown = false;
        setTimeout(() => {
          lock.scrollEvent = false;
        }, 300);
      });
    };
    const scrollDown = () => {
      if (lock.scrollEvent || lock.scrollDown) return;
      lock.scrollEvent = true;
      lock.scrollDown = true;
      $('#select-component').fadeOut(200, () => {
        lock.scrollUp = false;
        setTimeout(() => {
          lock.scrollEvent = false;
        }, 300);
      });
    };
    scrollEvent(scrollUp, scrollDown);
  }

  render() {
    return (
      <section className="select-component" id="select-component">
        <ul className="select-list">
          <li><a>拍摄地点<i className="down" /></a></li>
          <li><a>拍摄系列<i className="down" /></a></li>
          <li><a>价位筛选<i className="down" /></a></li>
        </ul>
        <ul className="select-item-panel">
          <li></li>
        </ul>
      </section>
    );
  }
}

export default SelectLayout;
