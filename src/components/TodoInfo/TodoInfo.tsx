// Don't forget to import the React library
import React from 'react';
import { AllTodos } from '../../react-app-env';
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
type Props = {
  todo: AllTodos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <p>{todo.title}</p>
    <p>{todo.completed ? ('completed') : ('NOT completed')}</p>
  </>
);
// Add a default export statement for TodoInfo component to use it in the other files
