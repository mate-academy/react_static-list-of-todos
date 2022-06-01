import React from 'react';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

interface Props {
  preparedTodos: Todo[];
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul className="todo-main">
      {preparedTodos.map((preparedTodo: Todo) => {
        return (
          <li key={preparedTodo.id} className="todo-main__list">
            <TodoInfo preparedTodo={preparedTodo} />
          </li>
        );
      })}
    </ul>
  );
};

// Don't forget to import the React library

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
