import React from 'react';
import { Todo } from './types/Todo';
import { UserInfo } from './UserInfo';

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
  <div>
    <h3>{todo.title}</h3>
    {todo.completed === true ? (
      <p>
        Status:&nbsp;
        <span style={green}>
          Completed
        </span>
      </p>
    ) : (
      <p>
        Status:&nbsp;
        <span style={red}>
          In progress
        </span>
      </p>
    )}
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
