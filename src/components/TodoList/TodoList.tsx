import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div className="todolist">
    {preparedTodos.map(todo => (
      <div className="todoList" key={todo.id}>
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
