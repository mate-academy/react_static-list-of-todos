import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todoInfo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => (
  <>
    <span>{todoInfo.title}</span>
    <span>{todoInfo.completed ? 'Done' : 'In progress'}</span>
  </>
);
