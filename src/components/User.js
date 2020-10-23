import React from 'react';
import propTypeTodoUserShape from './propTypesTodoShape/propTypeTodoUserShape';

const User = ({ user }) => (
  <span className="user">{user.name}</span>
);

User.propTypes = propTypeTodoUserShape;

export default User;
