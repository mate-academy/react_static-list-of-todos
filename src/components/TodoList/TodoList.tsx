// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodosProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodosProps> = ({ todos }) => (
  <section>
    {todos.map((todo) => (
      <TodoInfo todo={todo} />
    ))}
  </section>
);
