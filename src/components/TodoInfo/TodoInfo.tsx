import React from 'react';
import { Todos } from '../../type/Todos';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todos: Todos;
};

export const TodoInfo: React.FC<Props> = ({ todos }) => {
  return (
    <>
      <h2 className="todos-title">{todos.title}</h2>
      {todos.user && <UserInfo props={todos.user} />}
      <input className="task" type="checkbox" checked={todos.completed} />
      Done
    </>
  );
};
