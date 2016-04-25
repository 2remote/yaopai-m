import React, { PropTypes } from 'react';

import AutoList from 'common/AutoList';
import WorkCardLayout from 'main/layouts/WorkCardLayout';

const WorkLayout = props => (
  <div>
    <AutoList
      paging={{
        index: props.work.index,
        pages: props.work.pages,
        total: props.work.total,
        size: props.work.size,
      }}
      cons={ props.lbt ? props.lbt.query : undefined }
      updateCallback={ props.onLoadMore }
    >
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
    index: PropTypes.number,
    pages: PropTypes.number,
    total: PropTypes.number,
    size: PropTypes.number,
  }).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  lbt: PropTypes.shape({
    query: PropTypes.object,
  }),
};

export default WorkLayout;
