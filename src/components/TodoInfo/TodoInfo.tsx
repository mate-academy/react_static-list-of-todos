import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todo,
}) => {
  const {
    title,
    user,
    completed,
  } = todo;

  const todoClassName = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
