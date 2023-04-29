import React from 'react';

import { TodoInfoType } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<TodoInfoType> = ({ todo }) => (
  <>
  <h2 className="TodoInfo__title">{todo.title}</h2>
  {todo.user && <UserInfo user={todo.user} />}
  </>
);
