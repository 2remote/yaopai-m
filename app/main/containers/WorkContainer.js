import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AutoList from 'common/AutoList';
import WorkCardLayout from 'main/layouts/WorkCardLayout';

const tempFetch = () => {
  // console.log('Fetch more, please.', msg);
};

const WorkLayout = props => (
  <div>
    <h3>WorkLayout</h3>
    <AutoList updateCallback={tempFetch}>
      {
        props.work.list.map((item, key) => (
          <WorkCardLayout
            cover={ item.cover }
            title={ item.title }
            price={ item.price }
            views={ item.views }
            nickname={ item.nickname }
            key={ key }
          />
        ))
      }
    </AutoList>
  </div>
);

WorkLayout.propTypes = {
  work: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape({
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

const mapStateToProps = state => ({
  work: state.main.work,
});

const WorkContainer = connect(
  mapStateToProps
)(WorkLayout);

export default WorkContainer;
