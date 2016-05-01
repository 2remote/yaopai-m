import React, { PropTypes } from 'react';
import SelectLayout from './SelectLayout';
import MenuLayout from './MenuLayout';

const MainLayout = props => {
  return (
    <div style={{ paddingTop: 50, backgroundColor: 'red', position: 'relative' }}>
      {props.children}
      <SelectLayout />
      <MenuLayout />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
