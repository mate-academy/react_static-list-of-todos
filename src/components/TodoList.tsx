import React from 'react';
import { Todo } from './types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todo: Todo[],
};

export const TodoList: React.FC<Props> = ({ todo }) => {
  return (
    <ul>
      {todo.map(item => (
        <li className="todoList">
          <TodoInfo todos={item} />
        </li>
      ))}
    </ul>
  );
};
