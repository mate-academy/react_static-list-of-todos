import React from 'react';
import { User } from '../User';

import { TodoTypes } from '../../types';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <tr>
    <td>{title}</td>
    <td>
      {completed
        ? 'Is completed ✔'
        : 'Is not completed ❌'
      }
    </td>
    <td>
      <User name={user.name} />
    </td>
  </tr>
);

Todo.propTypes = {
  title: TodoTypes.title.isRequired,
  completed: TodoTypes.completed.isRequired,
  user: TodoTypes.user.isRequired,
};
