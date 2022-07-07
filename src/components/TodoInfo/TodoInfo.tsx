import React from 'react';
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, completed }) => (
  <>
    <h3 className="title" data-cy="title">{title}</h3>
    <i className="status" data-cy="status">
      {completed ? 'Completed' : 'Not completed'}
    </i>
  </>
);
