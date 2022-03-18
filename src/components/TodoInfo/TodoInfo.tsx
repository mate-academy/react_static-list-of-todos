import React from 'react';

import { PreparedTodos } from '../../types/PreparedTodos';

import './TodoInfo.scss';

type Props = Pick<PreparedTodos, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <div className="todo todo-list__todo">
    <div className="todo__title">
      {title}
    </div>
    <div className={`todo__progress ${completed ? 'todo__progress--completed' : ''}`}>
      {completed ? 'Completed' : 'In progress'}
    </div>
  </div>
);
