import React from 'react';

import { Todo } from '../../types/Todo';

import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
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
