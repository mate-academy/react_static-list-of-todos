import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  task: Todo
};

export const TodoInfo: React.FC<Props> = ({ task }) => (
  <>
    <h2 className="task__title">
      {task.title}
    </h2>

    <input
      type="checkbox"
      checked={task.completed}
      className="task__completed"
    />
  </>
);
