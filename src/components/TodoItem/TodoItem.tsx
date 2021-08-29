import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

import { User } from '../../types/User';

import './TodoItem.scss';

type Props = {
  title: string,
  completed: boolean,
  user: User | null
};

export const TodoItem: React.FC<Props> = (
  {
    title,
    completed,
    user,
  },
) => (
  <div className={classNames('TodoItem', { 'TodoItem--completed': completed })}>
    <div className="TodoItem__user">
      {user ? <UserInfo {...user} /> : 'User is not available'}
    </div>
    <div className="TodoItem__info">
      <h2 className="TodoItem__title">
        {title}
      </h2>
      <p>
        <b>{'Status: '}</b>
        {completed ? 'Completed!' : 'Still in Progress'}
      </p>
    </div>
  </div>
);
