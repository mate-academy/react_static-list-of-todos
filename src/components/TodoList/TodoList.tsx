import React from 'react';
import { PrepareTodos } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: PrepareTodos[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <React.Fragment key={todo.id}>
        <TodoInfo todo={todo} />
      </React.Fragment>
    ))}
  </ul>
);

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
