import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../react-app-env';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="card">
    {todos.map(todo => (
      <div className="card__item">
        <UserInfo user={todo.user} />
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
