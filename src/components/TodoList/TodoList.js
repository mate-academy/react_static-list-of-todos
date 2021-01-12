import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ preparedTodos }) {
  return (
    preparedTodos.map(item => (
      <TodoItem key={item.id} {...item} />
    ))

  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
