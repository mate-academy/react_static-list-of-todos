import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodosItem } from '../../types/TodosItem';

export const TodoInfo: React.FC<TodosItem> = ({ ...toDoItem }) => (
  <li className="todoInfo" key="toDoItem.id">
    <h2>
      {toDoItem.title}
    </h2>
    <strong>
      Status:
    </strong>

    {toDoItem.completed
      ? ' Done'
      : ' In process'}
    <UserInfo {...toDoItem.user} />
  </li>
);
