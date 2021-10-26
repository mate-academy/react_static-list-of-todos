import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <>
    <td>{todo.title}</td>
    <td>{todo.completed ? 'Completed' : 'In progress'}</td>
  </>
);
