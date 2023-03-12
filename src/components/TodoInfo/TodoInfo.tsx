// Add the required types and props
import React from 'react';

import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todos }) => (
  <h2 className="TodoInfo__title">{todos.title}</h2>
);
