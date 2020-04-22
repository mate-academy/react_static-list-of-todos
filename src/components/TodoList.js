import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todo }) {
  return (
    <ul className="todo__list">
      {todo.map(item => (
        <li className="todo__item" key={item.id}>
          <Todo todo={item} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
