import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

export const TodoList: React.FC<{ todos: Todo[]; }> = ({ todos }) => (
  <div className="todoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </div>
);
