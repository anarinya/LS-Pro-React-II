import React from 'react';

export default (props) => {
  const icon = props.icon.toLowerCase();
  return (
    <i className={`fa fa-${icon}`} />
  );
}