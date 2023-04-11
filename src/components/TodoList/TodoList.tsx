import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoLists = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoLists> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((item) => (
      <TodoInfo todo={item} key={item.userId} />
    ))}
  </section>
);
