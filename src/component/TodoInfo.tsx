import React from 'react';

import { Todo } from '../types/Todo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {` Todo title: ${todo.title}`}
    {` Todo compelted: ${todo.completed}`}
  </>
);
