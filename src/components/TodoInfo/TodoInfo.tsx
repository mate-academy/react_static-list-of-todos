import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => (
  <article className={classNames(
    'TodoInfo', { 'TodoInfo--completed': completed === true },
  )}
  >
    <h2 className="TodoInfo__title">
      {title}
    </h2>
    {user ? (
      <UserInfo
        {...user}
      />
    ) : null}
  </article>
);
