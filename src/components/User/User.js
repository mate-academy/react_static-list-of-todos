import React from 'react';
import { TodoListShape } from '../../shapes/TodoListShape';

import './User.scss';

export const User = ({ user, completed }) => (
  <h5 className={completed ? 'name' : 'name name--completed'}>
    {user.name}
  </h5>
);

User.propTypes = TodoListShape;
