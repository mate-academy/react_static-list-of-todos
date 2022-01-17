import React from 'react';

import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: PreparedTodo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo-info">
    {todo.user && <UserInfo user={todo.user} />}
    <strong className="todo-info__task">Task:</strong>
    {' '}
    <span className="todo-info__task">{todo.title}</span>
    <br />
    <strong className="todo-info__status">Status:</strong>
    {' '}
    {todo.completed === true ? (
      <span className="todo-info__status--completed">completed</span>
    )
      : (
        <span className="todo-info__status--uncompleted">incomplete</span>
      )}
  </div>
);
