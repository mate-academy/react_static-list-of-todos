import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className="todo-list__card card">
          <Todo
            title={todo.title}
            status={todo.status}
            user={todo.user}
          />
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
