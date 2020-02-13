import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ preparedArr }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Todo</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {preparedArr.map(obj => <Todo key={obj.id} object={obj} />)}
    </tbody>
  </table>
);

TodoList.propTypes = {
  preparedArr: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
