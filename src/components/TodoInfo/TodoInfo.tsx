import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { completed } = todo;
  const { title } = todo;

  return (
    <article className={
      classNames('TodoInfo', { 'TodoInfo--completed': completed })
    }
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
