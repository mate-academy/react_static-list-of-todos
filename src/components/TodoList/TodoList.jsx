import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export function TodoList({ preparedTodos }) {
  return (
    <div className="todo-list">
      {preparedTodos.map(todo => (
        <div key={todo.id} className="todo-list__card card">
          <Todo title={todo.title} status={todo.status} userId={todo.userId} />
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
