import React from 'react';
import propTypes from 'prop-types';
import Todo from './Todos';

function TodoList ({ preparedTodos }) {
  return (
    <ul>
      {preparedTodos.map(todo => (
          <li key={todo.id}>
            <Todo { ...todo } />
          </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  preparedTodos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}

export default TodoList;
