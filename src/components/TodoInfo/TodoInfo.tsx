import React from 'react';
import { PreparedTodos } from '../../react-app-env';

interface Prop {
  todo: PreparedTodos
}

export const TodoInfo:React.FC<Prop> = ({ todo }) => (
  <>
    <h4 data-cy="title">{todo.title}</h4>
    <p data-cy="status">{todo.completed ? 'Complated' : 'Not complated'}</p>
  </>
);
