import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { TodoWithUsers } from '../../types/Todo';

import './TodoInfo.scss';

interface Props {
  todoItem: TodoWithUsers;
}

export const TodoInfo: React.FC<Props> = ({ todoItem }) => (
  <>
    <h2 className="todo-info__title">{todoItem.title}</h2>

    {todoItem.user && (
      <p>
        <UserInfo user={todoItem.user} />
      </p>
    )}

    <p className="todo-info__stage">
      {`${todoItem.completed ? 'Completed' : 'Wait...'}`}
    </p>
  </>
);
