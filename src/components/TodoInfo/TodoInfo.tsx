import React from 'react';
import { PreparedTodos } from '../../types/PreparedTodos';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodos;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="todo-title">
      {todo.title}
    </div>
    {todo.completed && <div className="todo-completed">Completed</div>}
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
