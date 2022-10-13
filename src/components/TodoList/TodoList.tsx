import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li>
        <TodoInfo todo={todo} key={todo.id} />
      </li>
    ))}
  </ul>
);
