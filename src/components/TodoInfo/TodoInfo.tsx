import React from 'react';
import { UserInfo } from '../UserInfo';
import { PreparedTodo } from '../../types/PreparedTodo';

interface Props {
  todo: PreparedTodo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 className="todo-list__title">{todo.title}</h2>

    <span className="todo-list__status">{`Status: ${todo.completed ? 'completed' : 'waiting'}`}</span>

    <UserInfo user={todo.user} />
  </>
);
