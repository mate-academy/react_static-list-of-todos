// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props{
  todo: Todo
}

export const TodoInfo: React.FC <Props> = ({ todo }) => (
  <>
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user !== null
        ? <UserInfo user={todo.user} />
        : null}
    </article>
  </>
);
