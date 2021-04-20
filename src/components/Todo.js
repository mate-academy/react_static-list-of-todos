import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

import users from '../api/users';

export const Todo = ({ todos }) => (
  <>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.title}
        {todo.completed}
        <User users={users} />
      </li>
    ))}
  </>
);

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
