import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({
  todos,
}) {
  return (
    todos.map(elem => (
      <Todo key={elem} {...elem} />
    ))
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      userId: PropTypes.number.isRequired,
      user: PropTypes.object.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
