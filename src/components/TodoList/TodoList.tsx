// Add the required types and props
import React from 'react';

import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

type Todos = {
  todos: Todo[];
};

export const TodoList: React.FC<Todos> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(el => (
      <TodoInfo
        completed={el.completed}
        title={el.title}
        user={el.user}
        key={el.id}
      />
    ))}
  </section>
);
