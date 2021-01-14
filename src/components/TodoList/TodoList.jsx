import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

import { TodoTypes } from '../../types';
import './TodoList.scss';

export const TodoList = ({ todosList }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {todosList.map(item => (
        <Todo key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(PropTypes.shape(TodoTypes).isRequired)
    .isRequired,
};
