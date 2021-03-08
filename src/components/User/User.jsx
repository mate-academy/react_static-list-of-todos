import React from 'react';
import { UserType } from '../Types';
import './User.scss';

export const User = ({ name }) => (
  <p>
    {`User: `}
    <span className="todo__user-name">
      {name}
    </span>
  </p>
);

User.propTypes = UserType;
