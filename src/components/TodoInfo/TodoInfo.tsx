import React from 'react';

import { TodoInfoType } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<TodoInfoType> = ({ todo: { title, user } }) => (
  <>
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </>
);
