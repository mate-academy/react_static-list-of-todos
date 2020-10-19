import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
