import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo as TodoItem } from '../../types/Todo';
import './TodoInfo.scss';

interface Todo {
  todo: TodoItem;
}

export const TodoInfo: React.FC<Todo> = (props) => {
  const { todo } = props;

  return (
    <article
      className={
        `TodoInfo${
          todo.completed
            ? ' TodoInfo--completed'
            : ''
        }`
      }
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
