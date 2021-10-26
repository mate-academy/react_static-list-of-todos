import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </ul>
);
