import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

function TodoItem({ todo }) {
  return (
    <li>
      <label htmlFor={`todo-status-${todo.id}`}>
        <input
          type="checkbox"
          id={`todo-status-${todo.id}`}
          checked={todo.completed}
        />

        {todo.title}
      </label>

      <User user={todo.user} />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
    user: PropTypes.object,
    id: PropTypes.number,
  }).isRequired,
};

export default TodoItem;
