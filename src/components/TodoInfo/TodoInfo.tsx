// Don't forget to import the React library

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: PreparedTodo
}

export const TodoInfo : React.FC<Props> = ({ todo }) => (
  <li className="list__block" key={todo.id}>
    {`Todo id ${todo.id}`}
    <ul className="list__info">
      <li className="list__item" data-cy="title">
        {`Todo Title: ${todo.title}`}
      </li>
      <li className="list__item" data-cy="status">
        {`Todo Completed: ${todo.completed}`}
      </li>
      <li className="list__item">
        {todo.user && <UserInfo user={todo.user} />}
      </li>
    </ul>
  </li>
);
