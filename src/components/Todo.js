import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User/User';

export const Todo = ({ todo }) => (
  <p>
    {todo.todo.title}
    , Completed:
    {` ${todo.todo.completed.toString()}`}
    ,
    <User user={todo.user} />
  </p>
);

Todo.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};
