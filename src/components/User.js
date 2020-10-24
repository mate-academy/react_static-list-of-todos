import React from 'react';
import propTypeUserShape from './propTypesTodoShape/propTypeUserShape';

const User = ({ user }) => (
  <span className="user">{user.name}</span>
);

User.propTypes = propTypeUserShape;

export default User;
