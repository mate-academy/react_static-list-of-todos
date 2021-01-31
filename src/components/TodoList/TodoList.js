import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';

import { TodoesTypes } from '../../types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <table>
    <thead>
      <tr className="table_headers">
        <th>User</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoesTypes).isRequired,
};
