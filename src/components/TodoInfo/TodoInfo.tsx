import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  return (
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
