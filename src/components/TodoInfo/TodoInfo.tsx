import React from 'react';
import { FullTodo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: FullTodo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 className="todo_title">{todo.title}</h2>
    <div>
      <span
        className={`todo_status ${todo.completed
          ? 'todo_status-green'
          : 'todo_status-red'}`}
      >
        {todo.completed ? 'Completed' : 'Not completed'}
      </span>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  </>
);
