import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const classSet = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <>
      <article className={classSet}>
        <h2 className="TodoInfo__title">{todo.title}</h2>

        <UserInfo user={todo.user} />
      </article>
    </>
  );
};
