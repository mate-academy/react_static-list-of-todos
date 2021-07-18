import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

function TodoList({ preparedTodos }) {
  return (
    <div className="todo-list">
      {preparedTodos.map(todo => (
        <div key={todo.id} className="todo-list__card card">
          <Todo {...todo} />
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

export default TodoList;
