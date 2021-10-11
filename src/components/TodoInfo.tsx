import React from 'react';
import { Todo } from '../types/Todo';

export const TodoInfo: React.FC<{ todoInfo: Todo }> = ({ todoInfo }) => (
  <>
    <span>{todoInfo.title}</span>
    <span>{todoInfo.completed ? 'Done' : 'In progress'}</span>
  </>
);
