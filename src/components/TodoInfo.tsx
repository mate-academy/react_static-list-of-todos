import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';

import { Todo } from '../types/Todo';

type Props = Pick<Todo, 'title' | 'completed'>;

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <div className="todoInfo">
    <span className="todoInfo__task">{title}</span>
    <span className={classNames('todoInfo__completed', { 'todoInfo__completed--true': completed })} />
  </div>
);
