import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ preparedTodos }) {
  return (
    <ul>
      {preparedTodos.map(item => (
        <Todo item={item} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default TodoList;
