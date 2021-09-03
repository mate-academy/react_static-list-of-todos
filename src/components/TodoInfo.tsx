import React from 'react';
import { UserInfo } from './UserInfo';
import './style/TodoInfo.scss';

type Props = {
  todos: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todos: information } = props;

  return (
    <div className="todo-info">
      <UserInfo {...information} />
      <h1>{information.title}</h1>
      <p>
        <strong>Status:</strong>
        {' '}
        {information.completed ? 'has been completed' : 'not complete'}
      </p>
    </div>
  );
};
