import React from 'react';

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

type Props = {
  title: string,
  completed: boolean,
};

const TodoInfo: React.FC<Props> = ({
  title,
  completed,
}) => (
  <div>
    <p data-cy="title">{title}</p>
    <p data-cy="status">{completed}</p>
  </div>
);

export default TodoInfo;
