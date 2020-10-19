import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';

import { User } from '../User';

export const TodoList = ({ todos }) => (
  <ul>
    <li className="row header">
      <div className="status">status</div>
      <div>task</div>
      <div>user</div>
    </li>
    {
      todos.map(todo => (
        <li key={todo.id} className="row">
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
            className="status"
          />

          <div className="description">
            {todo.title}
          </div>

          <User {...todo.user} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
