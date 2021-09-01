import React from 'react';

import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <>
      <td>{title}</td>
      <td>{completed ? 'Done' : 'Undone'}</td>
    </>
  );
};
