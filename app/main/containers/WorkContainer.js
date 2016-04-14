import React from 'react';
import { connect } from 'react-redux';

import AutoList from 'common/AutoList';

const tempFetch = () => {
  // console.log('Fetch more, please.', msg);
};

const tempList = [{
  text: 'first',
}, {
  text: 'second',
}, {
  text: 'third',
}, {
  text: 'fourth',
}];

const WorkLayout = () => (
  <div>
    <h3>WorkLayout</h3>
    <AutoList updateCallback={tempFetch}>
      {
        tempList.map((item, key) => (
          <div key={key}>{ item.text }</div>
        ))
      }
    </AutoList>
  </div>
);

const mapStateToProps = state => ({
  name: state.name,
});

const WorkContainer = connect(
  mapStateToProps
)(WorkLayout);

export default WorkContainer;
