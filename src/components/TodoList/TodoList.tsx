// Don't forget to import the React library

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
import React from 'react';
import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todoList">
    {todos.map((todo) => (
      <div className="todoItem">
        <TodoInfo
          key={todo.id}
          todo={todo}
        />
      </div>
    ))}
  </div>
);
