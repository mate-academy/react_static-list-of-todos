// Add the required types and props
import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type TodoProp = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoProp> = ({ todo }) => {
  const {
    id, userId, title, completed, user,
  } = todo;
  const isCompleted = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={isCompleted} key={id}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      <UserInfo user={user} key={userId} />
    </article>
  );
};
