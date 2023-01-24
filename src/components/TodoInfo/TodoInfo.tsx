import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoPropsType {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoPropsType> = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article
      className={classNames(
        'TodoInfo',
        { 'TodoInfo--completed': completed },
      )}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
