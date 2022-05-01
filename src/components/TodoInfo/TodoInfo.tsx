import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { User } from '../../types/User';

type Props = {
  title: string,
  completed: boolean,
  user: User,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  return (
    <div className="todo-info">
      <div className="todo-info__title">
        <strong>Task:</strong>
        {' '}
        {title}
      </div>
      <div className="todo-info__status">
        <strong>Status:</strong>
        {' '}
        {completed ? 'Completed' : 'Not completed'}
      </div>

      <UserInfo
        user={user}
      />
    </div>
  );
};
