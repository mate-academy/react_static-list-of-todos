import React from 'react';
import { UserInfo } from '..';
import { Todo } from '../../types';

type Props = {
  todoItem: Todo
};

export const TodoInfo: React.FC<Props> = ({ todoItem }) => (
  <div>
    <h3>{todoItem.title}</h3>
    <span className={`${todoItem.completed ? 'completed' : 'inprogress'}`}>
      {`Status: ${todoItem.completed ? 'completed' : 'in progress'}`}
    </span>
    {todoItem.user && <UserInfo user={todoItem.user} />}
  </div>
);
