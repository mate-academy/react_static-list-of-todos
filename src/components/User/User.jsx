import React from 'react';
import PropTypes from 'prop-types';
import { TypeUser } from '../Types/TypeUser';
import './User.scss';

export const User = ({ user }) => (
  <div className="todo-user-name">
    {user.name}
  </div>
);

User.propTypes = {
  user: TypeUser.isRequired,
};
