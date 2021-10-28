import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoInfo title={todo.title} completed={todo.completed} user={todo.user} />
        </li>
      ))}
    </ul>
  );
};
