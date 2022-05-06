import React from 'react';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  title: string,
  status: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  status,
  user,
}) => (
  <>
    <div className="todo-info">
      <div className="todo-info__item">
        <span className="todo-info__title">Task:</span>
        {' '}
        {title}
      </div>
      <div className="todo-info__item">
        <span className="todo-info__title">Status:</span>
        {' '}
        {status ? 'Ready' : 'Not ready'}
      </div>
    </div>
    {user !== null
      ? <UserInfo user={user} />
      : 'information is absent'}
  </>
);
