import React from 'react';
import { User } from '../../types/Todo';
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
    <p className="todo-info">
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
    </p>
    <UserInfo user={user} />
  </>
);
