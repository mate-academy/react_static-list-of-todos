import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo: Todo;
}
export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const isCompleted = todo.completed;

  return (
    <article
      className={`TodoInfo ${isCompleted ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  );
};
