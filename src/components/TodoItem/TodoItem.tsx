import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

import { User } from '../../types/User';

import './TodoItem.scss';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Omit<Todo, 'id'>
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;
  const userInfo = user as Omit<User, 'id'>;

  return (
    <div className={classNames('TodoItem', { 'TodoItem--completed': completed })}>
      <div className="TodoItem__user">
        {userInfo ? <UserInfo userInfo={userInfo} /> : 'User is not available'}
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
};
