import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

type Props = {
  todos : Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
          <UserInfo user={todo?.user} />
        </li>
      ))}
    </ul>
  </>
);
