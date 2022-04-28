import React from 'react';

import { Todo } from '../../types/types';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <h3>{`${todo.completed ? 'completed' : 'not completed'}`}</h3>
    </div>
  );
};
