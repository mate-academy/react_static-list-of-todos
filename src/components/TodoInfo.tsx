import React from 'react';
import { Todo } from '../types/Todo';

type Props = Pick<Todo, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = props => (
  <>
    <span>
      {'Task: '}
      {props.title}
    </span>
    <span>
      {'Status: '}
      {props.completed ? 'Completed' : 'In progress'}
    </span>
  </>
);
