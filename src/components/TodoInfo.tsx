import React from 'react';
import { ForPreparedTodos } from '../react-app-env';

type Prop = {
  todoItem: ForPreparedTodos,
};

export const TodoInfo: React.FC<Prop> = ({ todoItem }) => {
  const { title, completed } = todoItem;

  return (
    <>
      Title:
      {title}
      , Completed startus:
      {completed ? 'completed' : 'no completed'}
    </>
  );
};
