import React from 'react';
import { Todo } from './types/Todo';

export const TodoInfo: React.FC<Pick<Todo, 'title' | 'completed'>> = ({ completed, title }) => {
  return (
    <>
      <td>{title}</td>
      <td>{(completed) ? 'Yes' : 'No'}</td>
    </>
  );
};
