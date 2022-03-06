import React from 'react';
import './TodoInfo.scss';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'Completed' : 'No completed'}</td>
    </>
  );
};
