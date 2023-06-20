import React from 'react';

import { Todo } from '../../types/Todo';

import { TodoInfo } from '../TodoInfo';

type Pros = {
  todos: Todo[],
};

export const TodoList: React.FC<Pros> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todo: Todo) => (
      <TodoInfo
        completed={todo.completed}
        title={todo.title}
        user={todo.user}
        key={todo.id}
      />
    ))}
  </ul>
);
