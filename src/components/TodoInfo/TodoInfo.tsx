import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({
  user,
  title,
  completed,
}) => (
  <>
    <UserInfo {...user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : 'Undone'}</td>
  </>
);
