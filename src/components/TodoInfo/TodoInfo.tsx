import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ user, title, completed }) => (
  <>
    <UserInfo {...user} />
    <div className="todos-row-item">{title}</div>
    <div className="todos-row-item--done">{completed && ('Done')}</div>
  </>
);
