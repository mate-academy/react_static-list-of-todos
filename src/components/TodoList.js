import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todo }) {
  return (
    <ul>
      {todo.map(item => (
        <li key={item.id}>
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
