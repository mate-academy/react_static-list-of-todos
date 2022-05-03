import React from 'react';
import { PreparedTodo } from '../Types/PreparedTodo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 className="todo__info-title">
      {todo.title}
    </h2>
    <p className={todo.completed ? 'completed' : 'no-completed'}>
      Status :
      {todo.completed ? ' Completed' : 'Not completed'}
    </p>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
