import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li
          className="Todo"
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
