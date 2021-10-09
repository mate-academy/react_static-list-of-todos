import React from 'react';
import { Todo } from '../types/TodoType';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  id,
}) => (
  <div className={`todo__body ${completed ? 'active' : ''}`}>
    <span className="criterium__field">
      Title:&nbsp;
      <span className="todo__title">
        {title}
      </span>
    </span>
    <span className="criterium__field">Completed:&nbsp;</span>
    {completed ? <>&#10003;</> : <>&#10007;</>}
    <br />
    <span className="criterium__field"> ID:&nbsp;</span>
    {id}
  </div>
);
