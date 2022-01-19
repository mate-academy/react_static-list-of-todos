import React from 'react';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparedTodo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="card">
        <TodoInfo
          todo={todo}
        />
      </li>
    ))}
  </ul>
);
