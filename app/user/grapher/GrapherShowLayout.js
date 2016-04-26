import React, { PropTypes } from 'react';

const GrapherShowLayout = props => (
  <div>
    GrapherShowLayout at {props.params.gid}
  </div>
);

GrapherShowLayout.propTypes = {
  params: PropTypes.shape({
    gid: PropTypes.string.isRequired,
  }).isRequired,
};

export default GrapherShowLayout;
