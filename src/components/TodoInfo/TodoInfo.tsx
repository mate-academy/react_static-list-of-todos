// Add the required types and props
import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo: Todo
}

export const TodoInfo:React.FC<TodoInfoProps> = ({ todo }) => {
  const { title, user, completed } = todo;

  const className = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
