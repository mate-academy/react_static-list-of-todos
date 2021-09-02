import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

type Prop = {
  todos: Todo[];
};

export const TodoList: React.FC<Prop> = ({ todos }) => (
  <div>
    <ul>
      <li>Name</li>
      <li>UserName</li>
      <li>Email</li>
      <li>Todo</li>
      <li>Status</li>
    </ul>
    {todos.map((item: Todo) => (
      <ul key={item.id}>
        <TodoInfo todo={item} />
      </ul>
    ))}
  </div>
);
