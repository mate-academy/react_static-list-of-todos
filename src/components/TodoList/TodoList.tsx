import React from 'react';

import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Todos = {
  todos: Todo[];
};

export const TodoList: React.FC<Todos> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
