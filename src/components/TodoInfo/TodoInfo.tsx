// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

interface TodoListProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoListProps> = ({ todo }) => (
  <article
    key={todo.id}
    className={todo.completed
      ? 'TodoInfo TodoInfo--completed' : 'TodoInfo TodoInfo'}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user ? <UserInfo key={todo.id} user={todo.user} /> : null}
  </article>
);
