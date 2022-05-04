import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../Types/Types';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
        {todo.user && <UserInfo user={todo.user} />}
      </li>
    ))}
  </ul>
);
