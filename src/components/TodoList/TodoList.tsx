import React from 'react';
import { TodoInfo } from '../TodoInfo';
import '../../App.scss';

type Props = {
  todos: PreparedTodo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="card">
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
          userId={todo.userId}
          id={todo.id}
        />
      </li>
    ))}
  </ul>
);
