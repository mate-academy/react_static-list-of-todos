import React from 'react';

export interface Todo {
  title: string,
  completed: boolean,
  id: number
}

type Props = {
  todo: Todo,
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <div className="todo__info">
    <div className="title" data-cy="title">{todo.title}</div>
    <div className="status" data-cy="status">
      {todo.completed
        ? ('completed')
        : ('no completed')}
    </div>
  </div>
);
