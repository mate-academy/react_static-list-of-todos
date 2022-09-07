import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
  } = todo;

  return (
    completed
      ? (
        <article className="TodoInfo TodoInfo--completed">
          <h2 className="TodoInfo__title">{title}</h2>
          <UserInfo
            key={todo.user?.id}
            user={todo?.user}
          />
        </article>
      )
      : (
        <article className="TodoInfo">
          <h2 className="TodoInfo__title">{title}</h2>
          <UserInfo
            key={todo.user?.id}
            user={todo?.user}
          />
        </article>
      )
  );
};
