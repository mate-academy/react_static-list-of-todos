import React from 'react';
import './User.css';
import { UserShape } from '../../shapes';

export const User = (props) => {
  const { user } = props;

  return (
    <span className="user">
      {user.name}
    </span>
  );
};

User.propTypes = {
  user: UserShape.isRequired,
};
