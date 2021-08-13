import React from 'react';
import User from './user';

const Todo = ({ title, completed }) => (
  <User user={...User} />,
  {title},
  {completed}
);

export default Todo;
