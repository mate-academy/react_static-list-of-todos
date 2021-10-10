import React from 'react';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = Pick<Todo, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <div className="todo__title">
      {title}
    </div>
    <div className="todo__status">
      {completed === true ? 'done' : 'in process'}
    </div>
  </>
);
