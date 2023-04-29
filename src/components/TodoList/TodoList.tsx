import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { TodoListType } from '../../types/Todo';

export const TodoList:React.FC<TodoListType> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} />
    ))}
  </section>
);
