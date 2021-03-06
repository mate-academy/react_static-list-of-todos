import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../Todo/Todo';

export default function TodoList({ preparedTodos }) {
  const todoList = preparedTodos.map(todo => (
    <Todo key={todo.id} {...todo} />
  ));

  return (
    <ul>
      {todoList}
    </ul>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  preparedTodos: [],
};
