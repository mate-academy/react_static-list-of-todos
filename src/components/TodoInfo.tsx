import React from 'react';
import { Todos } from '../types/Todos';

type Props = {
  todo: Todos,
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <>
    <td>{todo.title}</td>
    <td>{todo.completed ? 'Completed' : 'In process'}</td>
  </>
);
