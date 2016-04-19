import React, { PropTypes } from 'react';

/**
 * AutoList负责根据滚动情况调用props提供的刷新方法
 */
const AutoList = props => (
  <div>
    {props.children}
    <div onClick={() => props.updateCallback(2, 10)}>加载更多</div>
  </div>
);

AutoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  updateCallback: PropTypes.func.isRequired,
};

export default AutoList;
