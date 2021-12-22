import React from 'react';
import { Todos } from '../../types/Todos';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = Pick<Todos, 'title' | 'completed' | 'user'>;

export const TodoInfo: React.FC<Props> = (todo) => (
  <>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <span className="TodoInfo__completed" style={{ color: todo.completed ? 'green' : 'red' }}>
      {todo.completed ? 'Completed' : 'In proccess'}
    </span>
    <UserInfo user={todo.user} />
  </>
);
