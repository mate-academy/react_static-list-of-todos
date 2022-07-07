import React from 'react';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
type Prop = {
  title: string
  completed: boolean
};

export const TodoInfo: React.FC<Prop> = ({ title, completed }) => (
  <>
    <p className="todos__title" data-cy="title">{title}</p>
    <p
      data-cy="status"
    >
      {completed ? 'Done' : 'Not completed!'}
    </p>
  </>
);
