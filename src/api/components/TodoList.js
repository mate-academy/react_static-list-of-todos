import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ preparedTodos }) => (
  <ul className="">
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
