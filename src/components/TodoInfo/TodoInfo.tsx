import React from 'react';
import { Todo } from '../../types';

type PropsS = {
  todo: Todo
};
export const TodoInfo: React.FC<PropsS> = ({ todo }) => (
  <div className="todo-info">
    {todo.completed ? todo.title : 'error'}
  </div>
);
