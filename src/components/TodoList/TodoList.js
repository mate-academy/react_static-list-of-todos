
import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';
import { TitleTypes, CompletedTypes, UserTypes } from '../../types';

export const TodoList = ({ tasks }) => (
  <table>
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
      </tr>
    </thead>

    <tbody>
      {tasks.map(task => (
        <tr key={task.id}>
          <Todo {...task} />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: UserTypes,
      title: TitleTypes,
      completed: CompletedTypes,
    }).isRequired,
  ).isRequired,
};
