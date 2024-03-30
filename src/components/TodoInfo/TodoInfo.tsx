import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

// Add the required types and props
export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
