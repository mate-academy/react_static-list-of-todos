import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type User = {
  name: string,
  email: string
};

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | undefined;
}

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC <Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className="todo">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
