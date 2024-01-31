// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoProps> = ({ todo }) => {
  const {completed, id, userId, title} = todo;
  return (
  <>
    <article
      className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}
      key={id}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo userId={userId} />
    </article>
  </>
  )
};
