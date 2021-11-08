import React from 'react';
import { Todo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: Todo,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li className="todo__info">
    <h2 className="todo__title">{todo.title}</h2>
    <p className="todo__completed">
      {`Status: ${todo.completed ? 'Done' : 'In progress'}`}
    </p>
    {todo.user ? <UserInfo user={todo.user} /> : null }
  </li>
);
