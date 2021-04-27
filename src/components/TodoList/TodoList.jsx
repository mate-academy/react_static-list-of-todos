import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    user: UserType.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};
