import React, { PropTypes } from 'react';

const WorkShowLayout = props => (
  <div>
    WorkShowLayout at { props.params.wid }
  </div>
);

WorkShowLayout.propTypes = {
  params: PropTypes.shape({
    wid: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkShowLayout;
