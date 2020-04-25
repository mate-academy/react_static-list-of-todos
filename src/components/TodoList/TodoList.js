import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todosWithUser }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Todo</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todosWithUser.map(item => <Todo key={item.id} todoItem={item} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todosWithUser: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
