import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../Todo';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <UserInfo {...user} />
    <td>{title}</td>
    <td>{completed ? 'Done' : 'No'}</td>
  </>
);
