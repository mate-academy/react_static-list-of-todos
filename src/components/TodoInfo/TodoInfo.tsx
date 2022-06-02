// Don't forget to import the React library
import React from 'react';
import { PreparedTodos } from '../../appTypeDef';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

interface TodoInfoProps {
  todo: PreparedTodos
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const todoStatus = todo.completed
    ? 'Completed'
    : 'Pending';

  return (
    <>
      <tbody>
        <tr>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todoStatus}</td>
          <td>{todo.user?.id}</td>
        </tr>
      </tbody>
    </>
  );
};

// Add a default export statement for TodoInfo component to use it in the other files
