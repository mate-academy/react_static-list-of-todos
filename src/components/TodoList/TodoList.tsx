import React from 'react';
import { Todo } from '../../type/todo';
import { TodoData } from '../TodoData/TodoData';

import './TodoList.sass';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <div>
      <ul>
        {preparedTodos.map(todo => (
          <li className="todoList" key={todo.id}>
            <TodoData todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
