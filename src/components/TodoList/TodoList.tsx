import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodoListInterface {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListInterface> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};
