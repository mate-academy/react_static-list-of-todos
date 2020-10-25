import React from 'react';
import './User.scss';
import { userShape } from '../propTypes/userShape';

export const User = ({ user }) => (
  <div className="user">
    {user.name}
  </div>
);

User.propTypes = {
  user: userShape.isRequired,
};
