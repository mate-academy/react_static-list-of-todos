import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';

import Todo from '../Todo/Todo';

const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <div className="list">
          <Todo {...preparedTodo} />
        </div>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
