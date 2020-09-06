import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todoList }) => (
  <ul>
    <li className="titles">
      <span>Todo title</span>
      <span>Completed status</span>
      <span>User name</span>
    </li>
    {todoList.map(todo => (
      <li
        className={todo.completed ? 'green-border' : 'red-border'}
        key={todo.id}
      >
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

TodoList.defaultProps = {
  todoList: [],
};
