import React from 'react';
import { TodoCard } from '../../typedefs/TodoCard';
import { UserInfo } from '../userInfo';

interface Props {
  todo: TodoCard,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const completionStatus = todo.completed
    ? 'Done!'
    : 'In the process...';
  const condition = todo.completed
    ? 'done'
    : 'in-process';

  return (
    <li className="todo-list__list-item">
      <p className="todo-list__list-item-title">
        {todo.title}
      </p>

      <span className={`todo-list__complition-status--${condition}`}>
        {completionStatus}
      </span>

      {todo.user && <UserInfo user={todo.user} />}
    </li>
  );
};
