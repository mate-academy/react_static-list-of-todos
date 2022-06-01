import React from 'react';
import { PreparedTodo } from '../../types';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <h2>{`Task: ${todo.title}`}</h2>
        <p>
          {todo.completed
            ? ('Completed')
            : ('Not Completed')}
        </p>
        {todo.user && (
          <>
            <p>{todo.user.name}</p>
            <p>{todo.user.email}</p>
          </>
        )}
      </li>
    ))}
  </ul>
);
// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
