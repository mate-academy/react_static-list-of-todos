import React from 'react';
import { PreparedTodo } from '../../typedefs';
import { TodoInfo } from '../TodoInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

type Props = {
  todos: PreparedTodo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo: PreparedTodo) => {
        return (
          <li key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
