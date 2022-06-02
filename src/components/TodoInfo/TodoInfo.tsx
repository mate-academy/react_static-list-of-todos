import React from 'react';
import { PreparedTodos } from '../../appTypeDef';
import { UserInfo } from '../UserInfo/UserInfo';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

interface TodoInfoProps {
  todo: PreparedTodos
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const {
    id,
    title,
    completed,
    user,
  } = todo;
  const todoStatus = completed
    ? 'Completed'
    : 'Pending';

  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td data-cy="title">{title}</td>
          <td data-cy="status">{todoStatus}</td>
          <td>
            <UserInfo
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company.name}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

// Add a default export statement for TodoInfo component to use it in the other files
