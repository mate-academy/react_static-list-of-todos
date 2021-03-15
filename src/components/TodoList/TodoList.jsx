import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

function TodoList({ preparedTodos }) {
  return (
    <>
      {
        (preparedTodos.map(todo => <Todo todoItem={todo} key={todo.id} />))
      }
    </>
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;
