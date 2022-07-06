import React from 'react';

import { PreparedToDo } from '../../types/PreparedToDo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  preparedTodo: PreparedToDo
};

export const TodoInfo: React.FC<Props> = ({ preparedTodo }) => (
  <div className="todo__item">
    <h2 data-cy="title">
      {preparedTodo.title}
    </h2>

    <p className="todo__complete" data-cy="status">
      {preparedTodo.completed
        ? 'completed'
        : 'not completed'}
    </p>

    <div>
      <UserInfo user={preparedTodo.user} />
    </div>
  </div>
);

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
