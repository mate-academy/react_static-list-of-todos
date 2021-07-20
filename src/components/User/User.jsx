import React from 'react';
import './User.css';
import { UserPropTypes } from '../TodoPropTypes';

export const User = function User({ name }) {
  return (
    <React.Fragment>
      <span className="text-muted">
        {'User name: '}
      </span>
      <span className="user">
        {name}
      </span>
    </React.Fragment>
  );
};

User.propTypes = UserPropTypes;
