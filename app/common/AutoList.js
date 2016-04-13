import React, { PropTypes } from 'react';

/**
 * AutoList负责根据滚动情况调用props提供的刷新方法
 */
const AutoList = props => (
  <div>
    {props.children}
  </div>
);

AutoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AutoList;
