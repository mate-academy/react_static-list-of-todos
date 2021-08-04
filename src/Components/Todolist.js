import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

export const Todolist = ({ todos }) => (
  <ul>
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
