// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    key={todo.title}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
