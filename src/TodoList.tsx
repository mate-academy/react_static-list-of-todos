import React from 'react';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

export type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todoinfo={todo} />}
        </li>
      ))}
    </ul>
  );
};
