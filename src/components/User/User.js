import React from 'react';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ name, username }) => (
  <div className="User">
    <span>
      {name}
    </span>
    <span>
      nick:
      <i>{username}</i>
    </span>
  </div>
);

User.propTypes = UserType;
