import React from 'react';
import { TypeUser } from '../../types';
import './user.scss';

const User = ({ user }) => (
  <span className="user">{user.name}</span>
);

User.propTypes = TypeUser;

export { User };
