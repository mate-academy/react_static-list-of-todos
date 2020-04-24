import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

import './TodoList.css';

function TodoList({ todoList }) {
  return (
    <ul className="todo__list">
      {todoList.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  })).isRequired,
};

export default TodoList;
