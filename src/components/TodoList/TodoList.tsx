import React from 'react';
import { Todo } from '../../types/Todo';

import { TodoCard } from '../TodoCard/TodoCard';

export type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="container">
    {todos.map(todo => (
      <TodoCard todo={todo} key={todo.id} />
    ))}
  </div>
);
