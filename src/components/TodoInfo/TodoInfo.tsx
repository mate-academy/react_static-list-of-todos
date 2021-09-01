import React from 'react';

import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="task">
    <p className="task__title">{`Task: ${todo.title}`}</p>
    <p className="task__isCompleted">{todo.completed ? 'Task completed' : 'Task NOT completed'}</p>
  </div>
);
