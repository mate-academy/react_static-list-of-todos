import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ preparedTodos }) => (
  <div className="todo-list">
    {preparedTodos.map(preTodo => (
      <Todo {...preTodo} key={preTodo.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

TodoList.defaultProps = {
  preparedTodos: [],
};
