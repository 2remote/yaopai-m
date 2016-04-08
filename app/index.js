import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render(){
    return (
      <div className="container">
        Welcome To Facebook
      </div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
