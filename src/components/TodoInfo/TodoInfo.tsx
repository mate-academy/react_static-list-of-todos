import React from 'react';
import { type Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const isCompleted = todo.completed
    ? 'TodoInfo  TodoInfo--completed'
    : 'TodoInfo';

  return (
    <>
      <article className={isCompleted}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
      </article>

      {todo.user && <UserInfo user={todo.user} />}
    </>
  );
};
