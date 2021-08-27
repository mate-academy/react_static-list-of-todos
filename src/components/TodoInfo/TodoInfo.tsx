import React from 'react';

import { PreparedTodo } from '../../types/PreparedTodo';

export const TodoInfo: React.FC<PreparedTodo> = ({
  title,
  completed,
}) => (
  <>
    <td>{title}</td>
    <td>{completed ? 'Done' : 'Undone'}</td>
  </>
);
