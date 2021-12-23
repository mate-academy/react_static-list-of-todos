import React from 'react';
import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

type Styles = {
  color: string;
};

const red: Styles = {
  color: 'red',
};

const green: Styles = {
  color: 'green',
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todoBlock">
    <h3>{todo.title}</h3>
    <p>
      Status:&nbsp;
      <span style={!todo.completed ? red : green}>
        {!todo.completed ? 'In progress' : 'Completed'}
      </span>
    </p>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
