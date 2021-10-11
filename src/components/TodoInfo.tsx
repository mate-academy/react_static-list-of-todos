import React from 'react';
import { ToDo } from '../types/types';
import './TodoInfo.scss';

type Props = {
  todo: ToDo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="TodoItem">
    <p>
      {todo.title}
    </p>
    <p>
      {todo.completed ? 'completed' : 'to be completed'}
    </p>
  </div>
);
