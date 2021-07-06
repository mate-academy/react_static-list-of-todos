import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <div className="todo__list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};
