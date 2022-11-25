// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  if (todo.completed === true) {
    return (
      <article className="TodoInfo TodoInfo--completed" key={todo.id}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo user={todo.user} />
      </article>
    );
  }

  return (
    <article className="TodoInfo" key={todo.id}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
