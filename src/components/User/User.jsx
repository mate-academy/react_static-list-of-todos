import React from 'react';
import './User.css';

export const User = ({name}) => {
  return (
    <React.Fragment>
      {'User name: '}
      <span className="user">
        {name}
      </span>
    </React.Fragment>
)};
