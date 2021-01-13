import React from 'react';

import { User } from '../User';
import { TitleTypes, CompletedTypes, UserTypes } from '../../types';

export const Todo = ({ title, completed, user }) => (
  <>
    <User user={user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : 'In progress'}</td>
  </>
);

Todo.propTypes = {
  title: TitleTypes.isRequired,
  completed: CompletedTypes.isRequired,
  user: UserTypes.isRequired,
};
