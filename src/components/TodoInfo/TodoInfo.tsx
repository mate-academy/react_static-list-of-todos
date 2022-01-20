import React from 'react';
import classname from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<{ todo: Todo; }> = ({ todo }) => (
  <div
    className={classname('todo-status', 'todo', {
      'todo-status--completed': todo.completed,
    })}
  >
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
    <h2 className="todo__task">{todo.title}</h2>
    <h3>
      {todo.completed ? ' Completed' : ' TO DO'}
    </h3>
  </div>
);
