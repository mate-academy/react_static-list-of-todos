import React from 'react';
import propTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ tasks }) => (
  <ul>
    {tasks.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>

);

TodoList.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
