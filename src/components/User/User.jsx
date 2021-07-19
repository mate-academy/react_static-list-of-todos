import React from 'react';
import './User.css';
import { UserPropTypes } from '../TodoPropTypes';

export const User = ({name}) => {
  return (
    <React.Fragment>
      {'User name: '}
      <span className="user">
        {name}
      </span>
    </React.Fragment>
)};

User.propTypes = UserPropTypes;
