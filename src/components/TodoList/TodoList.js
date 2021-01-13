import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem, ItemTypes } from '../TodoItem/TodoItem';

function TodoList({ preparedTodos }) {
  return (
    preparedTodos.map(item => (
      <TodoItem key={item.id} {...item} />
    ))

  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    ItemTypes.isRequired,
  ).isRequired,
};

export default TodoList;
