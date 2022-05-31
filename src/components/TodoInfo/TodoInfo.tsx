import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import './TodoInfo.scss';

interface Props {
  info: PreparedTodo;
}

export const TodoInfo:React.FC<Props> = ({ info }) => (
  <>
    <h3 className="task-description" data-cy="title">
      {'Task: '}
      {info.title}
    </h3>
    <p data-cy="status">
      completed:
      {info.completed ? ' true' : ' false'}
    </p>
  </>
);
