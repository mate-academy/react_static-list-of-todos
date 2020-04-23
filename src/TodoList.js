import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todo }) {
  return (
    <div className="wrapper">
      {todo.map(td => (
        <div className="todo__item" key={td.id}>
          <Todo todo={td} />
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;
