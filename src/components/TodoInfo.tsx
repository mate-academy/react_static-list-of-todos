import React from 'react';
import { Todo } from '../types/types';

export const TodoInfo: React.FC<Todo> = ({ ...todo }) => (
  <>
    <div className="todo__title">
      {todo.title}
    </div>
    <div className={`todo__status todo__status--${todo.completed ? 'completed' : 'notCompleted'}`}>
      {todo.completed ? 'finished' : 'processing'}
    </div>
  </>
);
