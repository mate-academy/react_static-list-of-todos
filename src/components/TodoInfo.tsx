import React from 'react';
import { Todo } from '../types/todo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <span className="todoList__userInfo">
      {todo.title}
    </span>
    <span className="todoList__userInfo">
      {todo.completed
        ? 'Completed'
        : 'In progress'}
    </span>
  </>
);
