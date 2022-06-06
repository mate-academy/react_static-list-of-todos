import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../types';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map((item: PreparedTodo) => (
      <li key={item.id} className="todoListItem">
        <TodoInfo todo={item} />
      </li>
    ))}
  </ul>
);

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
