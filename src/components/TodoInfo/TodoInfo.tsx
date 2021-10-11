import React from 'react';

import { Todo } from '../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <>
      <p>
        {title}
      </p>

      <p>
        {completed ? 'completed' : 'not completed'}
      </p>
    </>
  );
};
