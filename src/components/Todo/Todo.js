import React from 'react';

import { User } from '../User';
import { TodoType } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <User user={user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : 'In progress'}</td>
  </>
);

Todo.propTypes = {
  title: TodoType.title.isRequired,
  completed: TodoType.completed.isRequired,
  user: TodoType.user.isRequired,
};
