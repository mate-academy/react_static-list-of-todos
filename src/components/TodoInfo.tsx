import React from 'react';
import { Todo } from '../types/Todo';

type Props = Pick<Todo, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <span>
      {'ToDo: '}
      {title}
    </span>
    <span>
      {'Status: '}
      {completed ? 'Completed' : 'In progress'}
    </span>
  </>
);
