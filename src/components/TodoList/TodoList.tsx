import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  preparedTodos: Todo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="App__list">
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <div className="task">
          <TodoInfo task={todo} />

          <UserInfo user={todo.user || null} />
        </div>
      </li>
    ))}
  </ul>
);
