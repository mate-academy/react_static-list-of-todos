// Don't forget to import the React library

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
import React from 'react';
import { Todo } from '../Types/types';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div>
    {`Id: ${todo.user?.id}`}
    <br />
    {`Title: ${todo.title}`}
    <br />
    {`Completed: ${todo.completed ? 'Yes' : 'No'}`}
  </div>
);
