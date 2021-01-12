import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.scss';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <div className="content">
    <div className="heading">
      <span>User</span>
      <span>Task</span>
      <span>Status</span>
    </div>
    <ul className="list">
      {todos.map(todo => (
        <li className="list__item" key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
