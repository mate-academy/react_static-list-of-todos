import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <div>
        <UserInfo user={todo.user} />
        <p data-cy="title">{`Task: ${todo.title}`}</p>
        <p data-cy="status">{`Status: ${todo.completed === true ? 'Done' : 'In progress'}`}</p>
      </div>
    </div>
  );
};
