import React from 'react';
import { Todo as TodoType } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  todo: TodoType;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article className={
      todo.completed === true
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'
    }
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>
      { todo.user
        ? (
          <UserInfo
            user={todo.user}
            key={todo.user?.id}
          />
        )
        : (<p>No user for this task</p>)}
    </article>
  );
};
