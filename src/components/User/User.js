import React from 'react';
import './User.scss';
import { UserShape } from '../propTypes/UserShape';

export const User = ({ name }) => (
  <div className="users__name">
    {name}
  </div>
);

User.propTypes = UserShape;
