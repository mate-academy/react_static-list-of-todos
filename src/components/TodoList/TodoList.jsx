import React from 'react';
import { Todo } from '../Todo/Todo';
import PropTypes from 'prop-types';

export const TodoList = ({ preparedTodos }) => {
  console.log(preparedTodos);
  return (
    <ul>
      {preparedTodos.map(todo => (
        <li key={todo.id}>
          <Todo {...todo}/>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
