import React  from 'react';
import FontIcon from './FontIcon';

export default (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="title">React <FontIcon icon="heart" /> Clock</span>   
      </div>
    </div>
  );
}