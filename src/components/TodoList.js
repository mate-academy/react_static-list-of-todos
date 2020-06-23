import PropTypes from 'prop-types';
import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <div className="todo">
    {todos.map(todo => (
      <Todo {...todo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
