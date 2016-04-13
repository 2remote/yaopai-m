import React, { PropTypes } from 'react';
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

const WorkLayout = props => (
  <div>
    <h3>WorkLayout for {`${props.name.firstName} ${props.name.lastName}`}</h3>
    <AutoList updateCallback={tempFetch}>
      {
        tempList.map((item, key) => (
          <div key={key}>{ item.text }</div>
        ))
      }
    </AutoList>
  </div>
);

WorkLayout.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  name: state.name,
});


// const caonima = state.name;
// return {
//   name: caonima,
// };
const WorkContainer = connect(
  mapStateToProps
)(WorkLayout);

export default WorkContainer;
