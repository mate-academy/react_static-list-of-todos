import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo-info">
    <h1 className="todo-info__title">
      {todo.title}
    </h1>
    <h3 className={`todo-info__status ${todo.completed ? 'completed' : 'not-completed'}`}>
      {todo.completed ? 'Completed' : 'Not Completed'}
    </h3>
    {todo.user && (
      <UserInfo
        name={todo.user?.name}
        username={todo.user?.username}
        email={todo.user?.email}
        phone={todo.user?.phone}
      />
    )}
  </div>
);
