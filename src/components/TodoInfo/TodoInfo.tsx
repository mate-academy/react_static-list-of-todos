import React from 'react';
import './TodoInfo.scss';
import { Todo } from '../../types/Todo';

interface Prop {
  todo: Todo;
}

export const TodoInfo: React.FC<Prop> = ({ todo }) => {
  return (
    <>
      <h2 className="todo-list__title">{todo.title}</h2>
      <span className="todo-list__text">
        Completed:
        {' '}
        <b>{todo.completed ? 'Yes' : 'No'}</b>
      </span>
    </>
  );
};
