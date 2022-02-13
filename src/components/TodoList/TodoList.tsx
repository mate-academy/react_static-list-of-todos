import React from 'react';

import { Todo } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  validTodos: Todo[]
};

export const TodoList: React.FC<Props> = ({ validTodos }) => (
  <ul className="todo-list">
    {validTodos.map((todo: Todo) => (
      <li key={todo.id} className="todo-card">
        <TodoInfo todoItem={todo} />
      </li>
    ))}
  </ul>
);
