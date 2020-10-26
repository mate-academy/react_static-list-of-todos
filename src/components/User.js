import React from 'react';
import UserShape from './propTypesTodoShape/UserShape';

const User = ({ user }) => (
  <span className="user">{user.name}</span>
);

User.propTypes = UserShape;

export default User;
