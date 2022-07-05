import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user: User | null;
}

interface User {
  name: string;
  email: string;
}

type Props = {
  preparedTodo: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodo }) => (
  <ul className="todo__list">
    {preparedTodo.map(todo => (
      <li className="todo__item">
        <UserInfo user={todo.user} />
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ))}
  </ul>
);
