import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
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
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.object,
  })).isRequired,
};
