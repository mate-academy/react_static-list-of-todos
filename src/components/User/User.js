import React from 'react';
import './User.css';
import { UserTypes } from '../Shape/UserTypes';

export const User = (props) => {
  const { name } = props;

  return (
    <p className="person">
      {name}
    </p>
  );
};

User.propTypes = UserTypes;
