import React from 'react';
import { Todo } from '../../react-app-env';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="todoInfo" data-cy="title">
      <b>Task: </b>
      {todo.title}
    </div>

    <div className="todoInfo" data-cy="status">
      <b>Status: </b>
      {todo.completed
        ? <b className="todoInfo__true">Completed!</b>
        : <b className="todoInfo__false">Not completed!</b>}
    </div>

    <div className="todoInfo">
      <b>User: </b>
      {todo.userId}
    </div>
  </>
);
