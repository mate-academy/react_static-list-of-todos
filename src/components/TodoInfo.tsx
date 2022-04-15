import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {`${todo.title} - ${todo.completed}`}
  </>
);
