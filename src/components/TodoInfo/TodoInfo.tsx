// Don't forget to import the React library
import React from 'react';
// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`
type Props = {
  title: string,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <p>{title}</p>
    <p>{completed ? ('completed') : ('NOT completed')}</p>
  </>
);
// Add a default export statement for TodoInfo component to use it in the other files
