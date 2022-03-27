import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.completed ? 'Comleted!' : 'Not completed!'}</p>
    </>
  );
};
