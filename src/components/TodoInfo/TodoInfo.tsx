import React from 'react';
import { NewTodo } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: NewTodo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo-info">
    <h2 className="todo-info__title">{todo.title}</h2>
    {
      todo.user && (
        <p>
          <UserInfo user={todo.user} />
        </p>
      )
    }

    <p className="todo-info__complited">
      {`Status: ${todo.completed ? 'Ready!' : 'In progress...'}`}
    </p>
  </div>
);
