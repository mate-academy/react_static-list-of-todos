import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

function TodoList({ todo }) {
  return (
    <ul className="item__list">
      {todo.map(el => (
        <li className="item__item" key={el.id}>
          <Todo todo={el} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
