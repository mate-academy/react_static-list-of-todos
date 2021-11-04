import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodosItem } from '../../types/TodosItem';

export const TodoInfo: React.FC<TodosItem> = ({ title, completed, user }) => (
  <li className="todoInfo">
    <h2>
      {title}
    </h2>
    <strong>
      Status:
    </strong>

    {completed
      ? ' Done'
      : ' In process'}
    {user && <UserInfo {...user} />}
  </li>
);
