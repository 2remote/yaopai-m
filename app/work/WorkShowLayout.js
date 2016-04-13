import React, { PropTypes } from 'react';

const WorkShowLayout = props => (
  <div>
    WorkShowLayout at { props.params.gid }
  </div>
);

WorkShowLayout.propTypes = {
  params: PropTypes.shape({
    gid: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkShowLayout;
