import React from 'react';
import classname from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<{ todo: Todo; }> = ({ todo }) => (
  <div className="todo" key={todo.id}>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
    <h2 className="todo__title">{todo.title}</h2>
    <h3 className={classname('todo-status', {
      'todo-status--completed': todo.completed,
    })}
    >
      Status:
      {todo.completed ? ' Completed' : ' Not completed'}
    </h3>
  </div>
);
